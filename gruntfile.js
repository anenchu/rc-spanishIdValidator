module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive:true,
            open: {
              target: 'http://localhost:8080/src/index.html'
            }            
          },
        }
     },
      uglify: {
        options: {
          mangle: false
        },
        files: { 
               src: 'src/*/*.js',  // source files mask
               dest: 'build/',    // destination folder
               expand: true,    // allow dynamic building
               flatten: true,   // remove all unnecessary nesting
           },
      },
  });

  grunt.registerTask('default', ['web','uglify'], function (){
    grunt.task.run('uglify');
  });
  
  //grunt.registerTask('web', ['connect']);
  grunt.registerTask('web', ['connect:server']);
  grunt.registerTask('uglify', ['connect:server']);

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
};