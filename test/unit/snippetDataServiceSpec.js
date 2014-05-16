'use strict';

describe('snippetDataService', function() {

    describe('getSnippet', function() {

        // load the module that contains the controller under test
        beforeEach(module('mioDemoApp'));

        // $http-backend to mock out the xhr object
        it('should issue a GET request to /data/snippet/2 when given id 2', inject(function(snippetDataService, $httpBackend) {
            var snippet = {
                id: 2,
                title: 'xyz'
            };
            $httpBackend.when('GET', '/data/snippet/2').respond(snippet);
            var snippet = snippetDataService.getSnippet(2);
            $httpBackend.flush(); // tell mock http service to respond to request

            expect(snippet.title).toBe('xyz');
        }));
    });
});