const config = require('../app.config')
module.exports = {
    test: /\.svg$/,
    include: config.paths.images,
    exclude: config.paths.fonts,
    loader: 'svg-sprite-loader',
    options: {}
}
