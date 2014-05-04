'use strict';

mioDemoApp.controller('createSnippetController',
    function createSnippetController($scope, snippetDataService) {
        $scope.snippet = {};

        // need to move this definition to a more accessible space
        $scope.languages = [
            { id: 0, name: 'JavaScript' },
            { id: 1, name: 'C#' },
            { id: 2, name: 'Java' },
            { id: 3, name: 'Perl' },
            { id: 4, name: 'Scala' }
        ];

        $scope.saveSnippet = function(snippet, newSnippetForm) {
            if (newSnippetForm.$valid) {
                snippetDataService.saveSnippet(snippet);
            }
        };
    }
);
