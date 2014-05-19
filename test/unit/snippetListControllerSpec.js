'use strict';

describe('snippetListController', function() {

    var scope;
    var controllerFactory;
    var mockSnippetDataService;
    var mockLocationService;

    var createController = function() {
        return controllerFactory('snippetListController', {
            $scope: scope,
            $location: mockLocationService,
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
        mockSnippetDataService = { getAllSnippets: sinon.stub() };
        mockLocationService = sinon.stub({url: function() {}});
    });

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {

        var mockSnippets = {};
        mockSnippetDataService.getAllSnippets.returns(mockSnippets);
        createController();

        expect(mockSnippetDataService.getAllSnippets.calledOnce).toBe(true);
        expect(scope.snippets).toBe(mockSnippets);
    });

    it('should redirect to the correct url when redirectToSnippet is called', function() {
        createController();
        var snippet = { id: 1 };
        scope.redirectToSnippet(snippet);

        expect(mockLocationService.url.calledWith('/snippet/1')).toBe(true);
    });
});
