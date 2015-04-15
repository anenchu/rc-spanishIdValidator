module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8081,
            keepalive:true,
            open: {
              target: 'http://localhost:8081/test/index.html'
            }            
          },
        }
     },
     clean: {
      options: {force: true},
      all: {
        src: ['./build/**/*.*']
      }
    },
    concat: {
      dist: {
        src: ['./src/namespace.js', './src/directives/*.js', './src/services/*.js'],
        dest: './build/spanishIdValidator.js'
      }
    },
    ngmin: {  
    all: {
        files: [
          {
            src: ['./build/*.js'],
            dest: './build/ngmin.js',
            ext: '.js'
          }
        ]
      }
    },
    uglify: {
    all: {
        files: [
          {
            src: ['./build/ngmin.js'],
            dest: './build/spanishIdValidator.min.js',
          }
        ]
    }
  },
  copy: {
    main: {
        files: [
            {expand: true, flatten: true, src: ['./*/*.js'],
             dest: './build/',  filter: 'isFile'}
        ]
    }
  }
});

  grunt.registerTask('default', ['web','clean','concat','ngmin','uglify','copy'], function (){
    grunt.task.run('clean');
    grunt.task.run('concat');
    grunt.task.run('copy');
    grunt.task.run('ngmin');
    grunt.task.run('uglify');
    
  });
  
  grunt.registerTask('web', ['connect:server']);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
};