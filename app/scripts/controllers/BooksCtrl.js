angular.module('ajsDaysApp').controller('BooksCtrl', function($scope, BookDataService) {
    $scope.books = BookDataService.getBooks();
});