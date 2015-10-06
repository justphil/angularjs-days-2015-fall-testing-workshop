angular.module('ajsDaysApp').controller('BookDetailsCtrl', function($scope, $routeParams, BookDataService) {
    var isbn = $routeParams.isbn;
    $scope.book = BookDataService.getBookByIsbn(isbn);
});