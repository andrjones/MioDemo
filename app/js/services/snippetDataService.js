'use strict';

angular.module('mioDemoApp').factory('snippetDataService', function($resource) {
    var resource = $resource('/data/snippet/:id', {id:'@id'});

    var get = function(snippetId) {
        return resource.get({id:snippetId});
    };

    var save = function(snippet, callback) {
        if (typeof callback === 'undefined') {
            callback = function() {};
        }

        resource.query(function(data) {
            snippet.id = getNextSnippetId(data);
            resource.save(snippet, callback);
        });
    };

    var all = function() {
        return resource.query();
    };

    var getNextSnippetId = function(snippets) {
        var max = 0;

        if (snippets) {
            for (var i = 0; i < snippets.length; i++) {
                if (snippets[i].id > max) {
                    max = snippets[i].id;
                }
            }
        }

        return (max + 1);
    };

    return {
        getSnippet: get,
        saveSnippet: save,
        getAllSnippets: all
    };
});
