angular.module('ajsDaysApp').controller('BooksCtrl', function($scope, BookDataService) {
    $scope.books = BookDataService.getBooks();

    $scope.deleteBook = function(book) {
        $scope.bookToDelete = book;
        $scope.dialogVisible = true;
        $scope.dialogTitle = 'Wirklich löschen?';
        console.log('deleteBook', book);
    };

    $scope.performDeletion = function() {
        var result = BookDataService.deleteBookByIsbn($scope.bookToDelete.isbn);
        if (result) {
            $scope.books = BookDataService.getBooks();
            $scope.cancelDeletion();
        } else {
            console.log('Could not delete book:', $scope.bookToDelete.isbn);
        }
    };

    $scope.cancelDeletion = function() {
        delete $scope.bookToDelete;
        delete $scope.dialogVisible;
        delete $scope.dialogTitle;
    }
});