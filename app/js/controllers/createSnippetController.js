'use strict';

angular.module('mioDemoApp').controller('createSnippetController',
    function createSnippetController($scope, snippetDataService, supportedLanguages) {
        $scope.snippet = {};
        $scope.languages = supportedLanguages;
        $scope.saveSnippet = function(snippet, newSnippetForm) {
            if (newSnippetForm.$valid) {
                snippetDataService.saveSnippet(snippet, function() {
                    $scope.newSnippetForm.$setPristine();
                    $scope.snippet = {};
                });
            }
        };
    }
);
