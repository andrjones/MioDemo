'use strict';

describe('snippetListController', function() {

    //var $controllerConstructor; // use $ to remind us that is will hold an angular object
    var scope;
    var mockSnippetDataService;
    var mockLocationService;

    // load the module that contians the controller under test
    beforeEach(angular.mock.module('mioDemoApp'));

    // inject is global in tests (comes from angular-mocks)
    beforeEach(angular.mock.inject(function($controller, $rootScope) {
        // create a new scope object that can be used in controllers
        scope = $rootScope.new();

        // stub service methods used in the controller
        mockSnippetDataService = sinon.stub({getAllSnippets: function() {}});
        mockLocationService = sinon.stub({url: function() {}});

        // $controller will allow you to construct (new up) a controller
        $controller('snippetListController',
            { $scope: scope, $location: mockLocationService, snippetDataService: mockSnippetDataService, supportedLanguages: {} });
    }));

    it('should set the snippets property in scope to the result of snippetDataService.getAllSnippets', function() {
        var mockSnippets = {};
        mockSnippetDataService.getAllSnippets.returns(mockSnippets);

        expect(scope.snippets).toBe(mockSnippets);
    });

    it('should redirect to the correct url when redirectToSnippet is called', function() {
        var snippet = { id: 1 };
        scope.redirectToSnippet(snippet);

        expect(mockLocation.url.calledWith('/snippet/1')).toBe(true);
    });
});
