const path = require('path');
const merge = require('webpack-merge');

// const config = require('../config/app')
const MODE_BEING_RUN = process.env.npm_lifecycle_event;

module.exports = merge({
	/**
     * Project paths.
     *  /d/LocalByFlyWheel/default-timber---wordpress/app/public/wp-content/themes/timber-press-web-pack
     * @type {Object}
     */
	paths: {
		root: path.resolve(__dirname, '../'),
		public: path.resolve(__dirname, '../public'),
		sass: path.resolve(__dirname, '../assets/styles'),
		fonts: path.resolve(__dirname, '../assets/fonts'),
		images: path.resolve(__dirname, '../assets/images'),
		javascript: path.resolve(__dirname, '../assets/scripts'),
		vendor: path.resolve(__dirname, '../assets/vendor'),
		temps: path.resolve(__dirname, '../assets/temp'),
		relative: '../',
		external: /node_modules|bower_components/
	},

	/**
     * Collection of application front-end assets.
     *
     * @type {Array}
     */
	assets: {
		app: [
			// "babel-polyfill",
			'./assets/scripts/app.js',
			'./assets/styles/app.scss'
		],
		vue: [
			// "idempotent-babel-polyfill",
			'./assets/scripts/v-app.js'
		]
	},

	/**
     * List of filename schemas for different
     * application assets.
     *
     * @type {Object}
     */
	outputs: {
		css: { filename: 'styles/[name].css' },
		font: { filename: 'fonts/[name].[ext]' },
		image: { filename: 'images/[name].[ext]' },
		javascript: { filename: 'scripts/[name].js' },
		vendor: path.resolve(__dirname, '../public/vendor'),
		temp: { filename: 'temp/[name].[ext]' }
	},

	/**
     * List of libraries which will be provided
     * within application scripts as external.
     *
     * @type {Object}
     */
	externals: {
		jquery: 'jQuery',
	},

	/**
     * Settings of other build features.
     *
     * @type {Object}
     */
	settings: {
		sourceMaps: MODE_BEING_RUN !== 'production'
	}
});
