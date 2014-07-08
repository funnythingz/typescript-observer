module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'build/app.min.js': ['build/app.js']

    typescript:
      base:
        src: ['src/**/*.ts']
        dest: 'build/app.js'
        options:
          sourceMap: false

      test:
        src: ['tests/**/*.ts']
        options:
          sourceMap: false

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'uglify', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js']
  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'uglify', 'clean'])
