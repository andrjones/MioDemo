'use strict';

angular.module('mioDemoApp').directive('syntax', function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        template: '<pre><code></code></pre>',
        link: function(scope, element) {
            // using timeout is a dirty hack to allow for binding to occur
            $timeout(function() {
                element.each(function(i, e) { hljs.highlightBlock(e) });
            }, 50);
        }
    }
});
