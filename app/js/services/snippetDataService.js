'use strict';

mioDemoApp.factory('snippetDataService', function($resource) {
    var resource = $resource('/data/snippet/:id', {id:'@id'});

    var get = function(snippetId) {
        return resource.get({id:snippetId});
    };

    var save = function(snippet) {
        snippet.id = getNextSnippetId();
        return resource.save(snippet);
    };

    var all = function() {
        return resource.query();
    };

    var getNextSnippetId = function() {
        var snippets = all();
        var max = 0;
        for (var i = 0; i < snippets.length; i++) {
            if (snippets[i].id > max) {
                max = snippets[i].id;
            }
        }
        return max+1;
    }

    return {
        getSnippet: get,
        saveSnippet: save,
        getAllSnippets: all
    };
});
