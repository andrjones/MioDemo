'use strict';

angular.module('mioDemoApp').directive('mioSyntax', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<pre><code>{{code}}</code></pre>',
        scope: {
            code: '='
        },
        link: function(scope, element) {

            var watchExpression = function() {
                return scope.code;
            };

            var listener = function(newValue, oldValue) {

                if (newValue === oldValue && newValue === undefined) return;

                element.each(function(i, e) {
                    hljs.highlightBlock(e)
                });

                unregister();
            };

            var unregister = scope.$watch(watchExpression, listener);
        }
    }
});
