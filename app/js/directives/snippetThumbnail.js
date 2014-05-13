'use strict'

mioDemoApp.directive('snippetThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/snippetThumbnail.html',
        scope: {
            snippet: '=',
            showDetails: '&'
        },
        controller: function($scope, supportedLanguages) {
            $scope.languageName = function(languageId) {
                for (var i = 0; i < supportedLanguages.length; i++) {
                    if (supportedLanguages[i].id === languageId) {
                        return supportedLanguages[i].name;
                    }
                }
                throw { name: "Lookup Error", message: "Unknown language Id"};
            };
        }
    }
});