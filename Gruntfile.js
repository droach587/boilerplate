module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/*.js', // All JS in the folder
                    'js/global.js'  // This specific file
                ],
                dest: 'js/build/app.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/app.js',
                dest: 'js/build/app.min.js'
            }
        },
        compass: {                  // Task
            dist: {                   // Target
              options: {              // Target options
                sassDir: 'sass',
                cssDir: 'css',
                outputStyle: 'compressed',
                imagesPath: "img",
                generatedImagesDir: 'img',
                fontsPath: "css/fonts",
                require: 'breakpoint',
                watch: true
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};