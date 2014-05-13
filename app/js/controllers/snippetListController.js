'use strict';

mioDemoApp.controller('snippetListController',
    function snippetListController($scope, $location, snippetDataService, supportedLanguages) {
        $scope.snippets = snippetDataService.getAllSnippets();
        $scope.languages = supportedLanguages;
        $scope.redirectToSnippet = function(snippet) {
            $location.url('/snippet/' + snippet.id);
        }
    }
);
