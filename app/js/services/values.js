'use strict';

angular.module('mioDemoApp').value("supportedLanguages", [
    { id: 0, name: 'JavaScript' },
    { id: 1, name: 'C#' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Perl' },
    { id: 4, name: 'Scala' }
]);

// this service is not used in the application, it is here for demonstrating
// that services are interchangeable
angular.module('mioDemoApp').factory("supportedLanguages2", function() {
    return [
        { id: 0, name: 'JavaScript' },
        { id: 1, name: 'C#' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'Perl' },
        { id: 4, name: 'Scala' }
    ];
})

// this service is not used in the application, it is here for demonstrating
// testing simple (no dependencies) services
angular.module('mioDemoApp').factory("supportedLanguages3", function() {
    var languages = [
        { id: 0, name: 'JavaScript' },
        { id: 1, name: 'C#' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'Perl' },
        { id: 4, name: 'Scala' }
    ];

    var findLanguage = function(pattern) {
        pattern = new RegExp(pattern);
        var results = [];
        for (var i = 0; i < languages.length; i++) {
            if (pattern.test(languages[i].name)) {
                results.push(languages[i]);
            }
        }
        return results;
    };

    return {
        languages: languages,
        findLanguage: findLanguage
    };
});
