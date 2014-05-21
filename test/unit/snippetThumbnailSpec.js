'use strict';

describe('snippetThumbnail', function() {
    var element;
    var mockShowDetails;

    // load the module that contains the directive under test
    beforeEach(module('mioDemoApp'));

    // load the directive template being rendered for test
    beforeEach(module('partials/directives/snippetThumbnail.html'));

    // get a compiler and a scope object
    beforeEach(inject(function($compile, $rootScope) {
        var scope = $rootScope;
        scope.snippet = {
            title: 'test title',
            name: 'test name',
            languageId: 1,
            description: 'test description',
            code: 'test code'
        };
        mockShowDetails = sinon.stub();
        scope.redirectToSnippet = mockShowDetails;

        // create and compile directive into a detached dom node
        element = angular.element('<mio-snippet-thumbnail snippet="snippet" show-details="redirectToSnippet(snippet)" />');
        $compile(element)(scope);
        scope.$digest(); // update the html
    }));

    it('should render the correct data', function() {
        expect(element.text()).toContain('test title');
        expect(element.text()).toContain('test name');
        expect(element.text()).toContain('C#');
        expect(element.text()).toContain('test description');
        expect(element.text()).toContain('test code');
    });

    it('should call the showDetails function when clicked', function() {
        element.click();
        expect(mockShowDetails.called).toBe(true);
    });
});