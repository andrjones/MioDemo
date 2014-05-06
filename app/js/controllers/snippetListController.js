'use strict';

mioDemoApp.controller('snippetListController',
    function snippetListController($scope, $location, snippetDataService, supportedLanguages) {
        $scope.snippets = snippetDataService.getAllSnippets();

        $scope.loadSnippet = function(snippet) {
            $location.url('/snippet/' + snippet.id);
        };

        $scope.getLanguageNameFromId = function(languageId) {
            for (var i = 0; i < supportedLanguages.length; i++) {
                if (supportedLanguages[i].id === languageId) {
                    return supportedLanguages[i].name;
                }
            }
            throw { name: "Lookup Error", message: "Unknown language Id"};
        };
    }
);
