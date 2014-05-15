'use strict';

describe('snippetListController', function() {

    var scope;
    var controllerFactory;
    var mockSnippetDataService;
    var mockRouteParamsService;

    var createController = function() {
        return controllerFactory('snippetController', {
            $scope: scope,
            $routeParams: mockRouteParamsService,
            snippetDataService: mockSnippetDataService
        });
    };

    // load the module that contains the controller under test
    beforeEach(module('mioDemoApp'));

    // inject is global in tests (comes from angular-mocks)
    beforeEach(inject(function($controller, $rootScope) {
        // create a new scope object that can be used in controllers
        scope = $rootScope.new();
        // pass the controller service out so it can be used as a factory
        // for instantiating the controller under test
        controllerFactory = $controller;
    }));

    // stub service methods used in the controller
    beforeEach(function() {
        mockSnippetDataService = sinon.stub({getSnippet: function(snippetId) {}});
        mockRouteParamsService = { snippetId: 1 };
    });

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {
        createController();
        var mockSnippet = {};
        mockSnippetDataService.getSnippet.withArgs(1).returns(mockSnippet);

        expect(scope.snippet).toBe(mockSnippet);
    });
});
