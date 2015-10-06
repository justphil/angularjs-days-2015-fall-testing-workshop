var BookListPage = require('../page-objects/book-list-page');

describe('book-list view', function() {

    var page;

    beforeEach(function() {
        page = new BookListPage();
        page.open();
    });

    it('should show a proper heading', function() {
        expect(page.getHeading().getText()).toBe('Books');
    });

    it('should allow proper book deletion', function() {
        var bookList = page.getBookList();
        expect(bookList.count()).toBe(3);
        expect(page.isMessageDialogVisible()).toBe(false);

        page.getDeleteButton(0).click();

        expect(page.isMessageDialogVisible()).toBe(true);

        page.getYesButton().click();
        expect(page.isMessageDialogVisible()).toBe(false);
        expect(bookList.count()).toBe(2);
    });

    it('should allow book filtering', function() {
        var bookList = page.getBookList();
        expect(bookList.count()).toBe(3);
        page.enterSearchText('react');
        expect(bookList.count()).toBe(1);
        expect(page.getTitleByIndex(0)).toBe('ReactJS');
    });

});