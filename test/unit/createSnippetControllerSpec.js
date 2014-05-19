'use strict';

describe('createSnippetController', function() {

    var scope;
    var controllerFactory;
    var mockSnippetDataService;
    var mockRouteParamsService;

    var createController = function() {
        return controllerFactory('createSnippetController', {
            $scope: scope,
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
        mockSnippetDataService = { saveSnippet: sinon.stub() };
    });

    it('should call snippetDataService.save with a valid form', function() {
        var snippet = { id: 2 };
        var form = {
            $valid: true
        };
        scope.newSnippetForm = form;
        createController();

        scope.saveSnippet(snippet, form);

        expect(mockSnippetDataService.saveSnippet.called).toBe(true);
    });

    it('should not call snippetDataService.save with an invalid form', function() {
        var snippet = { id: 2 };
        var form = {
            $valid: false
        };
        scope.newSnippetForm = form;
        createController();

        scope.saveSnippet(snippet, form);

        expect(mockSnippetDataService.saveSnippet.called).toBe(false);
    });
});
