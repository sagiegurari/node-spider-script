'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        BuildConfig: {
            libDirectory: 'lib',
            testDirectory: 'test',
            targetDirectory: 'target'
        },

        clean: {
            options: {
                force: true
            },
            dot: 'true',
            target: {
                src: [
                    '<%=BuildConfig.targetDirectory%>/**'
                ]
            }
        },

        jsonlint: {
            full: {
                src: [
                    '<%=BuildConfig.libDirectory%>/**/*.json',
                    '*.json'
                ]
            }
        },

        jshint: {
            full: {
                files: {
                    src: [
                        '*.js',
                        '<%=BuildConfig.libDirectory%>/**/*.js'
                    ]
                }
            },
            options: {
                jshintrc: true
            }
        },

        jslint: {
            full: {
                src: [
                    '*.js',
                    '<%=BuildConfig.libDirectory%>/**/*.js'
                ],
                options: {
                    edition: 'latest',
                    failOnError: true
                },
                directives: {
                    node: true,
                    vars: true,
                    plusplus: true
                }
            }
        },

        eslint: {
            full: {
                options: {
                    config: '.eslintrc'
                },
                src: [
                    '*.js',
                    '<%=BuildConfig.libDirectory%>/**/*.js'
                ]
            }
        },

        todos: {
            options: {
                priorities: {
                    high: /(todo|TODO|fixme|FIXME)/
                }
            },
            full: {
                src: [
                    'index.js',
                    '<%=BuildConfig.libDirectory%>/**/*.js',
                    '<%=BuildConfig.testDirectory%>/**/*.js'
                ]
            }
        },

        mochaTest: {
            full: {
                options: {
                    reporter: 'spec'
                },
                src: ['./<%=BuildConfig.testDirectory%>/**/*spec.js']
            }
        },

        jsdoc: {
            full: {
                src: [
                    '<%=BuildConfig.libDirectory%>/**/*.js',
                    'index.js',
                    'README.md'
                ],
                options: {
                    destination: '<%=BuildConfig.targetDirectory%>/docs',
                    'private': true
                }
            }
        }
    });

    grunt.registerTask('full', 'Run all build steps.', [
        'clean:target',
        'jsonlint:full',
        'jshint:full',
        'jslint:full',
        'eslint:full',
        'todos:full',
        'jsdoc:full',
        'test'
    ]);

    grunt.registerTask('test', 'Run all module tests cases.', [
        'mochaTest:full'
    ]);
};
