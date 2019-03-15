"use strict";
const grunt = require('grunt');
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        perfbudget: {
            default: {
                options: {
                    url: 'http://www.baidu.com',
                    key: 'A.e107eef22bc03e1abd9ca87a94351579',
                    budget:{
                    	SpeedIndex:1500
                    }
                }
            }
        }
    });
    //执行perfbudget所需要的对应的包
    grunt.loadNpmTasks('grunt-perfbudget');
    grunt.registerTask('default', ['perfbudget']);
};