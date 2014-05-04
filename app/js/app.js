'use strict';

var mioDemoApp = angular.module('mioDemoApp', ['ngRoute', 'ngResource']);
mioDemoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/newSnippet',
        {
            templateUrl: 'partials/newSnippet.html',
            controller: 'createSnippetController'
        });
    $routeProvider.otherwise({redirectTo: '/newSnippet'});
    $locationProvider.html5Mode(true);
}]);
