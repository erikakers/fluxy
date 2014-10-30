module.exports = {
  dist: {
    files: {
      '<%= config.app %>/scripts/app.js' : [
        '<%= config.src %>/javascript/**/**/*.js'
      ]
    }
  }
}
