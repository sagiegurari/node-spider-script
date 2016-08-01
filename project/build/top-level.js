'use strict';

module.exports = function (grunt) {
    grunt.registerTask('coverage-prepare', 'Pre test tasks', [
        'cleanup'
    ]);

    grunt.registerTask('jstest', 'Run tests.', [
        'coverage-prepare',
        'mocha_istanbul:coverage',
        'integration-test'
    ]);

    grunt.registerTask('coverage-ci', 'Test for continues integration.', [
        'jstest',
        'coveralls:full'
    ]);

    grunt.registerTask('build', 'Run all build steps.', [
        'format',
        'docs',
        'lint',
        'jstest'
    ]);

    return {};
};
