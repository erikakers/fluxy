// watch task options
module.exports = {
	gruntfile: {
		files: ['Gruntfile.js']
	},
	javascript: {
		files: ['<%= config.src %>/javascript/**/**/*.js'],
		tasks: ['concat:dev']
	},
	react: {
		files: ['<%= config.src %>/jsx/**/**/*.jsx'],
		tasks: ['react']
	}
};
