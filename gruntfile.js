module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive:true,
            open: {
              target: 'http://localhost:8080/test/index.html'
            }            
          },
        }
     },
  });

  grunt.registerTask('default', ['web']);
  
  grunt.registerTask('web', ['connect:server']);
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  
};