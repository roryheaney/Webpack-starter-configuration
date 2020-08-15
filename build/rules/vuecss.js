const config = require('../app.config')

module.exports = {
    include: config.paths.scripts,
    exclude: config.paths.sass,
    test: /\.css$/,
    use: [
		'vue-style-loader',
		'css-loader'
    ]
}
