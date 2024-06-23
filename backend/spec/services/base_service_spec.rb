# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ::BaseService, type: :service do
  let(:subclass) do
    Class.new(described_class) do
      def fetch_result
        result
      end
    end
  end
  let(:result) { subclass.new.fetch_result }

  context 'when there is success result' do
    it 'returns result with success state' do
      expect(result.succeeded?).to eq(true)
    end
  end

  context 'when there is validation error' do
    it 'returns not succeeded result' do
      failed_result = result.validation_error!(messages: [{ 'field' => 'unknown' }])

      expect(failed_result.succeeded?).to eq(false)
    end

    it 'raises ParloValidationError' do
      expect do
        result.validation_error!(messages: [{ 'field' => 'unknown' }]).fetch_or_raise!
      end.to raise_error(ParloValidationError)
    end
  end

  context 'when there is not found error' do
    it 'returns not succeeded result' do
      failed_result = result.not_found_error!(resource: 'test')

      expect(failed_result.succeeded?).to eq(false)
    end

    it 'raises ParloNotFoundError' do
      expect do
        result.not_found_error!(resource: 'test').fetch_or_raise!
      end.to raise_error(ParloNotFoundError)
    end
  end

  context 'when there is not allowed error' do
    it 'returns not succeeded result' do
      failed_result = result.not_allowed_error!(code: 'test')

      expect(failed_result.succeeded?).to eq(false)
    end

    it 'raises ParloNotAllowedError' do
      expect do
        result.not_allowed_error!(code: 'test').fetch_or_raise!
      end.to raise_error(ParloNotAllowedError)
    end
  end
end
