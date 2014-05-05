'use strict';

mioDemoApp.controller('snippetListController',
    function snippetListController($scope, $location, snippetDataService) {
        $scope.snippets = snippetDataService.getAllSnippets();

        $scope.loadSnippet = function(snippet) {
            $location.url('/snippet/' + snippet.id);
        }
    }
);
