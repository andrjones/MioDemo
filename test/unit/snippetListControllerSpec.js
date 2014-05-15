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

    beforeEach(inject(function($controller, $rootScope) {
        // create a new scope object that can be used in controllers
        scope = $rootScope.$new();
        // pass the controller service out so it can be used as a factory
        // for instantiating the controller under test
        controllerFactory = $controller;
    }));

    // stub service methods used in the controller
    beforeEach(function() {
        mockSnippetDataService = sinon.stub({getAllSnippets: function() {}});
        mockLocationService = sinon.stub({url: function() {}});
    });

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {
        createController();
        var mockSnippets = {};
        mockSnippetDataService.getAllSnippets.returns(mockSnippets);

        expect(scope.snippets).toBe(mockSnippets);
    });

    it('should redirect to the correct url when redirectToSnippet is called', function() {
        createController();
        var snippet = { id: 1 };
        scope.redirectToSnippet(snippet);

        expect(mockLocationService.url.calledWith('/snippet/1')).toBe(true);
    });
});
