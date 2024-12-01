# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::ContactsController, type: :request do
  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'create' do
    let(:create_params) do
      {
        name: 'contact_test_123',
        email: 'contact_test_123@example.com',
        status: 'unsubscribed',
        list_id: list.id
      }
    end

    it 'creates a contact' do
      post_with_token(token, '/admin/contacts', { contact: create_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:contact][:name]).to eq(create_params[:name])
        expect(json[:contact][:status]).to eq('unsubscribed')
        expect(json[:contact][:email]).to eq(create_params[:email])

        contact = Contact.find_by(email: 'contact_test_123@example.com')

        expect(contact.list_id).to eq(list.id)
        expect(contact.company_id).to eq(company.id)
      end
    end

    context 'when token is invalid' do
      it 'returns unauthorized error' do
        post_with_token('invalid-token', '/admin/contacts', { contact: create_params })

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'update' do
    let(:contact) { create(:contact, company:, list:) }
    let(:update_params) do
      {
        name: 'update_1',
        email: 'contact_test_123@example.com',
        status: 'unsubscribed'
      }
    end

    it 'updates a contact' do
      put_with_token(token, "/admin/contacts/#{contact.id}", { contact: update_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:contact][:name]).to eq(update_params[:name])
        expect(json[:contact][:status]).to eq(update_params[:status])
        expect(json[:contact][:email]).to eq(update_params[:email])
      end
    end

    context 'when contact does not exist' do
      it 'returns not_found error' do
        put_with_token(token, '/admin/contacts/invalid', { contact: update_params })

        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when contact email already exists' do
      let(:contact2) { create(:contact, company:, list:, email: 'contact_test_123@example.com') }

      before { contact2 }

      it 'returns unprocessable_entity error' do
        put_with_token(token, "/admin/contacts/#{contact.id}", { contact: update_params })

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'destroy' do
    let(:contact) { create(:contact, company:, list:) }

    before { contact }

    it 'deletes a contact' do
      expect { delete_with_token(token, "/admin/contacts/#{contact.id}") }
        .to change(Contact, :count).by(-1)
    end

    it 'returns deleted contact' do
      delete_with_token(token, "/admin/contacts/#{contact.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:contact][:name]).to eq(contact.name)
      end
    end

    context 'when contact does not exist' do
      it 'returns not_found error' do
        delete_with_token(token, '/admin/contacts/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'show' do
    let(:contact) { create(:contact, company:, list:) }

    before { contact }

    it 'returns contact' do
      get_with_token(token, "/admin/contacts/#{contact.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:contact][:name]).to eq(contact.name)
      end
    end

    context 'when contact does not exist' do
      it 'returns not_found error' do
        get_with_token(token, '/admin/contacts/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'index' do
    let(:contact) { create(:contact, company:, list:) }

    before { contact }

    it 'returns contacts' do
      get_with_token(token, '/admin/contacts')

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:contacts].count).to eq(1)
        expect(json[:contacts].first[:name]).to eq(contact.name)
      end
    end

    context 'with pagination' do
      let(:contact2) { create(:contact, company:, list:, email: 'second@example.com', name: 'second') }

      before { contact2 }

      it 'returns contacts with correct meta data' do
        get_with_token(token, '/admin/contacts?page=1&per_page=1')

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(json[:contacts].count).to eq(1)
          expect(json[:meta][:current_page]).to eq(1)
          expect(json[:meta][:next_page]).to eq(2)
          expect(json[:meta][:prev_page]).to eq(nil)
          expect(json[:meta][:total_pages]).to eq(2)
          expect(json[:meta][:total_count]).to eq(2)
        end
      end
    end

    context 'with list_id filter' do
      let(:contact2) { create(:contact, company:, list: nil, email: 'second@example.com', name: 'second') }

      before { contact2 }

      it 'returns contacts for correct list' do
        get_with_token(token, "/admin/contacts?page=1&per_page=1&list_id=#{list.id}")

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(json[:contacts].count).to eq(1)
          expect(json[:contacts].first[:name]).to eq(contact.name)
          expect(json[:meta][:current_page]).to eq(1)
          expect(json[:meta][:next_page]).to eq(nil)
          expect(json[:meta][:prev_page]).to eq(nil)
          expect(json[:meta][:total_pages]).to eq(1)
          expect(json[:meta][:total_count]).to eq(1)
        end
      end
    end
  end

  describe 'import' do
    let(:file_path) { 'spec/fixtures/contacts.csv' }
    let(:upload_file) { Rack::Test::UploadedFile.new(file_path, 'text/csv') }

    context 'when the CSV file is valid' do
      it 'imports contacts and returns success' do
        expect {
          post_with_token(
            token,
            "/admin/contacts/import?list_id=#{list.id}",
            { file: upload_file },
            { 'Content-Type' => 'multipart/form-data' }
          )
        }.to change(Contact, :count).by(3)

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(CsvImport.where(company:).order(created_at: :desc).first.status).to eq('completed')
          expect(json[:message]).to eq('Import successfully processed')

          contact1 = Contact.find_by(email: 'mrichards@example.com')
          expect(contact1).to have_attributes(
            name: 'Mark Richards',
            email: 'mrichards@example.com',
            status: 'subscribed',
            company_id: company.id,
            list_id: list.id
          )

          contact2 = Contact.find_by(email: 'jexpress@example.com')
          expect(contact2).to have_attributes(
            name: 'Jane Express',
            email: 'jexpress@example.com',
            status: 'unsubscribed',
            company_id: company.id,
            list_id: list.id
          )

          contact3 = Contact.find_by(email: 'zoe@example.com')
          expect(contact3).to have_attributes(
            name: 'Ivan Zoe',
            email: 'zoe@example.com',
            status: 'subscribed',
            company_id: company.id,
            list_id: list.id
          )
        end
      end
    end

    context 'when the CSV file contains invalid data' do
      let(:contact) { create(:contact, name: 'contact-worldwide', email: 'zoe@example.com', company:) }

      before do
        contact
      end

      it 'imports valid contacts and skips invalid ones' do
        expect {
          post_with_token(
            token,
            "/admin/contacts/import?list_id=#{list.id}",
            { file: upload_file },
            { 'Content-Type' => 'multipart/form-data' }
          )
        }.to change(Contact, :count).by(2)

        aggregate_failures do
          expect(response).to have_http_status(:unprocessable_entity)
          expect(CsvImport.where(company:).order(created_at: :desc).first.status).to eq('failed')
        end
      end
    end

    context 'when no file is uploaded' do
      it 'returns a 404 error' do
        post_with_token(
          token,
          "/admin/contacts/import?list_id=#{list.id}",
          { file: nil },
          { 'Content-Type' => 'multipart/form-data' }
        )

        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
