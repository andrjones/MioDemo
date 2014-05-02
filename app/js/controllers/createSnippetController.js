'use strict';

mioDemoApp.controller('createSnippetController',
    function createSnippetController($scope) {
        $scope.snippet = {};

        $scope.saveSnippet = function(snippet, newSnippetForm) {
            if (newSnippetForm.$valid) {

            }
        };
    }
);
