activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
   deploy.method   = :sftp
  deploy.host            = 'sftp.sd6.gpaas.net'
  deploy.port            = 22
  deploy.path            = 'vhosts/default/'
  deploy.user     = '37868' # no default
  deploy.password = 'Im02i2sX_' # no default
end

