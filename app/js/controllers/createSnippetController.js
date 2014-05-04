'use strict';

mioDemoApp.controller('createSnippetController',
    function createSnippetController($scope, snippetDataService) {
        $scope.snippet = {};

        $scope.saveSnippet = function(snippet, newSnippetForm) {
            if (newSnippetForm.$valid) {
                snippetDataService.saveSnippet(snippet);
            }
        };
    }
);
