'use strict'

mioDemoApp.directive('snippetThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/snippetThumbnail.html'
    }
});