# frozen_string_literal: true

module Admin
  class ListsController < BaseController
    def create
      result = Lists::CreateService.new(
        params: input_params.to_h.deep_symbolize_keys.merge(company_id: current_company.id)
      ).call

      if result.succeeded?
        render_list(result.list)
      else
        render_error_response(result)
      end
    end

    def show
      list = current_company.lists.find_by(id: params[:id])

      return not_found_error(resource: 'list') unless list

      render_list(list)
    end

    def update
      list = current_company.lists.find_by(id: params[:id])
      result = Lists::UpdateService.new(list:, params: input_params.to_h.deep_symbolize_keys).call

      if result.succeeded?
        render_list(result.list)
      else
        render_error_response(result)
      end
    end

    def destroy
      list = current_company.lists.find_by(id: params[:id])
      result = Lists::DestroyService.new(list:).call

      if result.succeeded?
        render_list(result.list)
      else
        render_error_response(result)
      end
    end

    def index
      lists = ListsQuery.new(
        company: current_company,
        search_term: params[:search_term],
        page: params[:page],
        limit: params[:per_page] || PER_PAGE
      ).call.lists

      render(
        json: ::CollectionSerializer.new(
          lists,
          ::Admin::ListSerializer,
          collection_name: 'lists',
          meta: pagination_metadata(lists)
        )
      )
    end

    private

    def input_params
      @input_params ||=
        params.require(:list).permit(
          :name
        )
    end

    def render_list(list)
      render(
        json: ::Admin::ListSerializer.new(
          list,
          root_name: 'list'
        )
      )
    end
  end
end
