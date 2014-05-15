'use strict';

var mioDemoApp = angular.module('mioDemoApp', ['ngRoute', 'ngResource']);

mioDemoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/newSnippet',
        {
            templateUrl: '/partials/newSnippet.html',
            controller: 'createSnippetController'
        });
    $routeProvider.when('/snippets',
        {
            templateUrl: '/partials/snippetList.html',
            controller: 'snippetListController'
        });
    $routeProvider.when('/snippet/:snippetId',
        {
            templateUrl: '/partials/snippet.html',
            controller: 'snippetController'
        });

    // default url when requesting root (/)
    $routeProvider.otherwise({redirectTo: '/newSnippet'});

    // allow for routing without # but server must be set up to return index.html on all requests
    $locationProvider.html5Mode(true);
}]);
