class Product < ApplicationRecord
    has_many_attached :images

    # def image_urls
    #     images.map do |image|
    #       Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
    #     end
    #   end
end
