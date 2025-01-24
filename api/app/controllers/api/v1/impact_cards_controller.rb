# frozen_string_literal: true

module Api
  module V1
    class ImpactCardsController < ApplicationController
      def index
        @impact_cards = ImpactCard.all

        @impact_cards = @impact_cards.where(location: params[:location]) if params[:location].present?
        @impact_cards = @impact_cards.where(sponsor: params[:sponsor]) if params[:sponsor].present?
        @impact_cards = @impact_cards.where(brand: params[:brand]) if params[:brand].present?

        render json: @impact_cards
      end
    end
  end
end 