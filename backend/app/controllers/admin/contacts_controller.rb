# frozen_string_literal: true

module Admin
  class ContactsController < BaseController
    def create
      result = Contacts::CreateService.new(
        params: input_params.to_h.deep_symbolize_keys.merge(company_id: current_company.id)
      ).call

      if result.succeeded?
        render_contact(result.contact)
      else
        render_error_response(result)
      end
    end

    def show
      contact = current_company.contacts.find_by(id: params[:id])

      return not_found_error(resource: 'contact') unless contact

      render_contact(contact)
    end

    def update
      contact = current_company.contacts.find_by(id: params[:id])
      result = Contacts::UpdateService.new(contact:, params: input_params.to_h.deep_symbolize_keys).call

      if result.succeeded?
        render_contact(result.contact)
      else
        render_error_response(result)
      end
    end

    def destroy
      contact = current_company.contacts.find_by(id: params[:id])
      result = Contacts::DestroyService.new(contact:).call

      if result.succeeded?
        render_contact(result.contact)
      else
        render_error_response(result)
      end
    end

    def index
      contacts = ContactsQuery.new(
        company: current_company,
        search_term: params[:search_term],
        page: params[:page],
        limit: params[:per_page] || PER_PAGE,
        filters: {
          list_id: params[:list_id]
        }
      ).call.contacts

      render(
        json: ::CollectionSerializer.new(
          contacts,
          ::Admin::ContactSerializer,
          collection_name: 'contacts',
          meta: pagination_metadata(contacts)
        )
      )
    end

    private

    def input_params
      @input_params ||=
        params.require(:contact).permit(
          :name,
          :status,
          :email,
          :list_id
        )
    end

    def render_contact(contact)
      render(
        json: ::Admin::ContactSerializer.new(
          contact,
          root_name: 'contact'
        )
      )
    end
  end
end
