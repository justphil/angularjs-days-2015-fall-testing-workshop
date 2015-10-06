describe('Service BookDataService', function() {

    var BookDataService;

    beforeEach(module('ajsDaysApp'));

    beforeEach(inject(function(_BookDataService_) {
        BookDataService = _BookDataService_;
    }));

    it('should be defined', function() {
        expect(BookDataService).toBeDefined();
    });

    describe('getBooks()', function() {
        it('should contain a getBooks() API function', function() {
            expect(angular.isFunction(BookDataService.getBooks)).toBe(true);
        });

        it('should return an array of book objects', function() {
            var books = BookDataService.getBooks();
            expect(angular.isArray(books)).toBe(true);
            expect(books.length).toBeGreaterThan(0);

            books.forEach(function(book) {
                expect(isValidBook(book)).toBe(true);
            })
        });

        it('should return copies of the internal books array', function() {
            var books1 = BookDataService.getBooks(),
                books2 = BookDataService.getBooks();
            expect(books1).not.toBe(books2); // toBe -> ===
        })
    });

    describe('getBookByIsbn()', function() {
        it('should contain a getBookByIsbn() API function', function() {
            expect(angular.isFunction(BookDataService.getBookByIsbn)).toBe(true);
        });

        it('should return the corresponding book object', function() {
            var isbn = '111-111-111',
                book = BookDataService.getBookByIsbn(isbn);
            expect(isValidBook(book)).toBe(true);
            expect(book.isbn).toBe(isbn);
        });

        it('should return copies of the internal book objects', function() {
            var isbn = '111-111-111',
                book1 = BookDataService.getBookByIsbn(isbn),
                book2 = BookDataService.getBookByIsbn(isbn);
            expect(book1).not.toBe(book2); // toBe -> ===
            expect(book1).toEqual(book2);
        })
    });

    function isValidBook(book) {
        return angular.isDefined(book)
                && angular.isString(book.title)
                && angular.isString(book.author)
                && angular.isString(book.isbn)
                && angular.isNumber(book.numPages);
    }

});