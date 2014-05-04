'use strict';

var mioDemoApp = angular.module('mioDemoApp', ['ngRoute', 'ngResource']);
mioDemoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/newSnippet',
        {
            templateUrl: 'partials/newSnippet.html',
            controller: 'createSnippetController'
        });

    // default url when requesting root (/)
    $routeProvider.otherwise({redirectTo: '/newSnippet'});

    // allow for routing without # but server must be set up to return index.html on all requests
    $locationProvider.html5Mode(true);
}]);
