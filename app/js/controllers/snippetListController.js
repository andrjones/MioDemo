'use strict';

mioDemoApp.controller('snippetListController',
    function snippetListController($scope, $location, snippetDataService) {
        $scope.snippets = snippetDataService.getAllSnippets();
    }
);
