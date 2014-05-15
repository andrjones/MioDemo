'use strict';

describe('snippetListController', function() {

    //var $controllerConstructor; // use $ to remind us that is will hold an angular object
    var scope;
    var mockSnippetDataService;
    var mockRouteParamsService;

    // load the module that contains the controller under test
    beforeEach(module('mioDemoApp'));

    // inject is global in tests (comes from angular-mocks)
    beforeEach(inject(function($controller, $rootScope) {
        // create a new scope object that can be used in controllers
        scope = $rootScope.new();

        // stub service methods used in the controller
        mockSnippetDataService = sinon.stub({getSnippet: function(snippetId) {}});
        mockRouteParamsService = { snippetId: 1 };

        // $controller will allow you to construct (new up) a controller
        $controller('snippetController',
            { $scope: scope, $routeParams: mockRouteParamsService, snippetDataService: mockSnippetDataService });
    }));

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {
        var mockSnippet = {};
        mockSnippetDataService.getSnippet.withArgs(1).returns(mockSnippet);

        expect(scope.snippet).toBe(mockSnippet);
    });
});
