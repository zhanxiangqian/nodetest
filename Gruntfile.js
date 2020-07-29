module.exports = function (grunt) {
    [
        'grunt-cafe-macha',
        'grunt-exec'
    ].forEach(function (task) {
        grunt.loadNpmTask(task);
    });

    grunt.initConfig(
        {
            cafemocha:{
                all:{src:'qa/tests-*.js',options:{ui:'tdd'},},
            },
            exec:{
                linkchecker:{cmd:'linkchecker',http:'//localhost:3000'}
            }
        }
    );

    grunt.registerTask('default',['cafemocha','exec']);
};

