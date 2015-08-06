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
				src: ['source/js/vendor-build/*.js', 'source/js/*.js', '!source/js/vendor-non-build/*.js'],
				dest: 'source/js/build/app.js',
			}
		},
		/**
		 * Uglify
		 * Minifies JS files for production
		 *
		 */
		uglify: {
			build: {
				src: 'source/js/build/app.js',
				dest: 'source/js/build/app.min.js',
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
					imagesDir: "source/img",
					imagesPath: "source/img",
					generatedImagesDir: 'source/img',
					fontsDir: "source/css/fonts",
					fontsPath: "source/css/fonts",
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
					cwd: 'source/img/source',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'source/img/',
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
		 * Grunt Copy to Build
		 * @ grun on cli
		 *
		 */
		copy: {
			main: {
				files: [
				// includes files within path and its sub-directories 
				{
					expand: true,
					cwd: 'source',
					src: ['*', 'js/build/app.min.js', 'js/vendor-non-build/**', 'img/*', 'css/**', '!js/vendor-build', '!.sass-cache', '!img/source'],
					filter: 'isFile',
					dest: 'build/'
				}],
			},
		},
		/**
		 * Grunt Watch Command
		 * @ grun on cli
		 *
		 */
		'ftp-deploy': {
			build: {
				auth: {
					host: 'djrfive.com',
					port: 21,
					authKey: 'key1'
				},
				src: 'build/',
				dest: '/public_html/build-test',
			}
		},
		/**
		 * Grunt Watch Command
		 * @ grun on cli
		 *
		 */
		watch: {
			scripts: {
				files: ['source/js/*.js'],
				tasks: ['concat', 'uglify']
			},
			images: {
				files: ['source/img/source/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			},
			styles: {
				files: ['source/sass/**/*.scss'],
				tasks: ['compass']
			},
			copy: {
				files: ['source/**'],
				tasks: ['copy']
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ftp-deploy');
	/**
	 * Register Grunt Tasks
	 *
	 *
	 */
	grunt.registerTask('default', ['compass', 'concat', 'uglify', 'imagemin', 'copy', 'ftp-deploy', 'watch']);
};