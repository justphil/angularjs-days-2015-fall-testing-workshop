angular.module('ajsDaysApp').directive('messageDialog', function() {

    // DDO (Directive Definition Object)
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/messageDialog.html',
        transclude: true,
        scope: {
            visible: '=',
            title: '=',
            onYes: '&',
            onNo: '&'
        }
    };
});