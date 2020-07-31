module.exports = function (grunt) {
    [
        'grunt-mocha-test',
        'grunt-exec'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });

    grunt.initConfig(
        {
            mochaTest:{
                test:{src:'qa/tests-*.js',options:{ui:'tdd'},},
            },
            exec:{
                linkchecker:{cmd:'linkchecker',http:'//localhost:3000'}
            }
        }
    );

    grunt.registerTask('default',['mochaTest','exec']);
};

