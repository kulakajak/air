json.array!(@articles) do |article|
  json.extract! article, :id, :title, :body
  json.url v1_article_url(article, format: :json)
end
