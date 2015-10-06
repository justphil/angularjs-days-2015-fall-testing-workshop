angular.module('ajsDaysApp').config(function($routeProvider) {
    $routeProvider.when('/books', {
        templateUrl: 'templates/routes/books.html',
        controller: 'BooksCtrl'
    }).when('/books/:isbn', {
        templateUrl: 'templates/routes/book-details.html',
        controller: 'BookDetailsCtrl'
    }).otherwise({
        redirectTo: '/books'
    });
});