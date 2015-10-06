angular.module('ajsDaysApp').factory('BookDataService', function() {
    // private state
    var _books = [
        {
            title: 'AngularJS',
            author: 'foo',
            numPages: 300,
            isbn: '111-111-111'
        },
        {
            title: 'Angular 2',
            author: 'bar',
            numPages: 100,
            isbn: '222-222-222'
        },
        {
            title: 'ReactJS',
            author: 'baz',
            numPages: 150,
            isbn: '333-333-333'
        }
    ];

    // private impl.
    function getBooks() {
        return angular.copy(_books);
    }

    function getBookByIsbn(isbn) {
        var filteredBooks = _books.filter(function(book) {
            return book.isbn === isbn;
        });

        if (filteredBooks.length > 0) {
            return angular.copy(filteredBooks[0]);
        } else {
            return null;
        }
    }

    // revealing module object
    return {
        getBooks: getBooks,
        getBookByIsbn: getBookByIsbn
    };
});