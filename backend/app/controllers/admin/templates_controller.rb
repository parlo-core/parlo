# frozen_string_literal: true

module Admin
  class TemplatesController < BaseController
    def create
      result = Templates::CreateService.new(
        params: input_params.to_h.deep_symbolize_keys.merge(company_id: current_company.id, parent: true)
      ).call

      if result.succeeded?
        render_template(result.template)
      else
        render_error_response(result)
      end
    end

    def show
      template = current_company.templates.find_by(id: params[:id])

      return not_found_error(resource: 'template') unless template

      render_template(template)
    end

    def update
      template = current_company.templates.find_by(id: params[:id])
      result = Templates::UpdateService.new(template:, params: input_params.to_h.deep_symbolize_keys).call

      if result.succeeded?
        render_template(result.template)
      else
        render_error_response(result)
      end
    end

    def destroy
      template = current_company.templates.find_by(id: params[:id])
      result = Templates::DestroyService.new(template:).call

      if result.succeeded?
        render_template(result.template)
      else
        render_error_response(result)
      end
    end

    def index
      templates = current_company.templates
                                 .order(created_at: :desc)
                                 .page(params[:page])
                                 .per(params[:per_page] || PER_PAGE)

      render(
        json: ::CollectionSerializer.new(
          templates,
          ::Admin::TemplateSerializer,
          collection_name: 'templates',
          meta: pagination_metadata(templates)
        )
      )
    end

    private

    def input_params
      @input_params ||=
        params.require(:template).permit(
          :name,
          :content
        )
    end

    def render_template(template)
      render(
        json: ::Admin::TemplateSerializer.new(
          template,
          root_name: 'template'
        )
      )
    end
  end
end
