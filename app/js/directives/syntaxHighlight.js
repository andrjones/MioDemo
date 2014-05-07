'use strict';

mioDemoApp.directive('syntaxHighlight', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.each(function(i, e) { hljs.highlightBlock(e) });
        }
    }
});
