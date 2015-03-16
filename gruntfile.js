module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive:true,
            open: {
              target: 'http://localhost:8080/src'
            }            
          },
        }
     },
  });

  grunt.registerTask('default', ['web']);
  
  grunt.registerTask('web', ['connect:server']);
  
};