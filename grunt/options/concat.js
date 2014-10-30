module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js',
			'<%= config.vendor %>/lodash/dist/lodash.js',
			'<%= config.vendor %>/reflux/dist/reflux.js',
			'<%= config.vendor %>/react/react.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/config/**/**/*.js',
			'<%= config.src %>/javascript/utilities/**/**/*.js',
			'<%= config.src %>/javascript/constants/**/**/*.js',
			'<%= config.src %>/javascript/dispatchers/**/**/*.js',
			'<%= config.src %>/javascript/stores/**/**/*.js',
			'<%= config.src %>/javascript/components/**/**/*.js',
			'<%= config.src %>/javascript/helpers/**/**/*.js',
			'<%= config.src %>/javascript/features/**/**/*.js'
		],
		dest: '<%= config.app %>/scripts/app.js'
	}
}
