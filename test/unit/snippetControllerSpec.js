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

    // get a controller constructor and a scope object
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controllerFactory = $controller;
    }));

    // stub service methods used in the controller
    beforeEach(function() {
        mockSnippetDataService = { getSnippet: sinon.stub() };
        mockRouteParamsService = { snippetId: 1 };
    });

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {
        var mockSnippet = {};
        mockSnippetDataService.getSnippet.withArgs(1).returns(mockSnippet);
        createController();

        expect(mockSnippetDataService.getSnippet.calledOnce).toBe(true);
        expect(mockSnippetDataService.getSnippet.calledWith(1)).toBe(true);
        expect(mockSnippetDataService.getSnippet.returned(mockSnippet)).toBe(true);
        expect(scope.snippet).toBe(mockSnippet);
    });
});
