module.exports = {
	compile: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/jsx',
				src: ['**/*.jsx'],
				dest: '<%= config.src %>/javascript/components',
				ext: '.js'
			}
		]
	}
};
