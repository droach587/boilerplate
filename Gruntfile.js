module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/*.js', // All JS in the folder
                'js/global.js' // This specific file
                ],
                dest: 'js/build/app.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/app.js',
                dest: 'js/build/app.min.js',
                options: {
                    banner: '/* HTML5 JS Boilerplate Five Design Build Date: ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },
        compass: { // Task
            dist: { // Target
                options: { // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compressed',
                    imagesPath: "img",
                    generatedImagesDir: 'img',
                    fontsPath: "css/fonts",
                    require: 'breakpoint'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/source',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'img/',
                    optimizationLevel: 5
                }],
                png: {
                    options: {
                        optimizationLevel: 7
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify']
            },
            images: {
                files: ['img/source/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            styles: {
                files: ['sass/styles.scss'],
                tasks: ['compass']
            }
        }
    });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch']);
};