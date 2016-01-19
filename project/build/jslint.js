'use strict';

module.exports = function (grunt) {
    return {
        tasks: {
            jslint: {
                full: {
                    src: [
                        '*.js',
                        '<%=BuildConfig.libDirectory%>/**/*.js',
                        '<%=BuildConfig.buildDirectory%>/**/*.js'
                    ],
                    options: {
                        edition: 'latest',
                        failOnError: true
                    },
                    directives: grunt.file.readJSON('.jslintrc')
                }
            }
        }
    };
};
