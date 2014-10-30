module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	loader: {
		src: [
			'<%= config.src %>/javascript/loader/**/*.js'
		],
		dest: '<%= config.src %>/scripts/loader.js'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js',
			'<%= config.vendor %>/lodash/dist/lodash.js',
			'<%= config.vendor %>/flux/dist/Flux.js',
			'<%= config.vendor %>/react/react.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	mobile: {
		src: [
			'<%= config.vendor %>/fastclick/lib/fastclick.js'
		],
		dest: '<%= config.app %>/mobile/vendor/mobile.js'
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
