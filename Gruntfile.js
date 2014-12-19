module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            combine: {
                files: {
                    'css/ultimateIEstylesheet.min.css': ['css/ultimateIEstylesheet.css',]
                }
            }
        }

    });

    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['cssmin']);

};
