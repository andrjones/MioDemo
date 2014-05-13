'use strict';

mioDemoApp.controller('snippetController',
    function snippetController($scope, $routeParams, snippetDataService) {
        $scope.snippet = snippetDataService.getSnippet($routeParams.snippetId);
    }
);