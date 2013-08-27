module.exports = function (grunt) {
    var config = {};

    // Start the node.js server
    config.bgShell = {
        runNode: {
            cmd: 'nodemon app/app.js',
            bg: true
        }        
    };

    // Validate and minify JS
    config.jshint = {
        options: {
            es5: true,
            eqeqeq: true,
            curly: true,
            indent: false,
            quotmark: 'single',
            scripturl: true,
            white: true
        },
        files: [
            'Gruntfile.js',
            'app/app.js',
            'www-dev/js/**/*.js',
            'tests/**/*.js'
        ]
    };

    // Compile mustache templates
    config.hogan = {
        dist: {
            templates: 'www-dev/templates/**/*.mustache',
            exposeTemplates: true,
            output: 'www-dev/templates/templates.js',
            binderName: 'amd'
        }
    };

    // Watch files
    config.watch = {
        files: [
            '<%= jshint.files %>',
            'www-dev/**/*.mustache'
        ],
        tasks: 'compile'
    };

    // Clean directories
    config.clean = {
        dest: 'www'
    };

    // Export and minify LESS to CSS
    config.less = {
        dist: {
            options: {
                compress: true
            },
            files: {}
        }
    };
    config.less.dist.files['www/css/app.css'] = 'www-dev/less/app.less';

    // RequireJS
    config.requirejs = {
        compile: {
            options: {
                baseUrl: 'www-dev/js',
                mainConfigFile: 'www-dev/js/main.js',
                optimize: 'uglify',
                name: 'main',
                out: 'www/js/main.js'                
            }
        }
    };

    // Export HTML
    config.targethtml = {
        dist: {
            src: 'www-dev/index.html',
            dest: 'www/index.html'
        }
    };

    // Copy ffiles
    config.copy = {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: 'www-dev/bower_components/requirejs/',
                    src: ['require.js'],
                    dest: 'www/js/'
                }
            ]
        }
    };

    // Initialize the config
    grunt.initConfig(config);

    // Load the NPM external tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tasks
    grunt.registerTask('compile', ['jshint', 'hogan']);
    grunt.registerTask('deploy', ['clean', 'compile', 'requirejs', 'less', 'targethtml', 'copy']);
    grunt.registerTask('server', ['bgShell:runNode', 'compile', 'watch']);
};