module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed',
          trace: true
        },
        files: {
          '/home/md5hashbrowns/git/md5hashbrowns.github.io/css/style.css' : '/home/md5hashbrowns/git/md5hashbrowns.github.io/scss/style.scss'
        }
      }
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          '/home/md5hashbrowns/git/md5hashbrowns.github.io/css/style.css':'/home/md5hashbrowns/git/md5hashbrowns.github.io/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
