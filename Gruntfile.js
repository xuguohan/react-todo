//Wrapper函数
module.exports = function(grunt) {

  // 配置项目
  grunt.initConfig({
    // 配置任务
    pkg: grunt.file.readJSON('package.json'),
    connect:{
        server:{
            options:{
                hostname:'*',
                base: '',
                open: true
            }
        }
    },
    watch:{
      
    }

  });

  // 加载任务
  grunt.loadNpmTasks('grunt-contrib-connect'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 默认任务.
  grunt.registerTask('server', ['connect','watch']);

};