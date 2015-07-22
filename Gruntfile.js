module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * Concat JS Files
         * Contat all files into one
         * 
         */
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'js/build/app.js',
            }
        },
        /**
         * Uglify
         * Minifies JS files for production
         * 
         */
        uglify: {
            build: {
                src: 'js/build/app.js',
                dest: 'js/build/app.min.js',
                options: {
                    banner: '/* HTML5 JS Boilerplate Five Design Build Date: ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },
        /**
         * Compass settings, watches with grunt command
         *
         * 
         */
        compass: { 
            dist: {
                options: { 
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compressed',
                    imagesPath: "img",
                    generatedImagesDir: 'img',
                    fontsPath: "css/fonts",
                    require: 'breakpoint',
                    sourcemap: true
                }
            }
        },
        /**
         * Image Optimization
         *
         * 
         */
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
        /**
         * Grunt Watch Command
         * @ grun on cli
         * 
         */
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
                files: ['sass/**/*.scss'],
                tasks: ['compass']
            }
        }
    });
    
    /**
     * Load NPM Tasks
     *
     * 
     */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    /**
     * Register Grunt Tasks
     *
     * 
     */
    grunt.registerTask('default', ['compass', 'concat', 'uglify', 'imagemin', 'watch']);
};