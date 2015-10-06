var config = {
    pageUrl: 'http://localhost:8080/#/books',
    headingSelector: 'h1',
    deleteButtonSelector: 'button',
    messageDialogSelector: 'message-dialog div.overlay',
    bookListRepeater: 'book in books',
    yesButtonSelector: 'message-dialog button.action-button',
    searchTextModel: 'searchText'
};

function BookListPage() {}

BookListPage.prototype.open = function() {
    browser.get(config.pageUrl);
};

BookListPage.prototype.enterSearchText = function(searchText) {
    element(by.model(config.searchTextModel)).sendKeys(searchText);
};

BookListPage.prototype.getHeading = function() {
    return element(by.css(config.headingSelector));
};

BookListPage.prototype.getBookList = function() {
    return element.all(by.repeater(config.bookListRepeater));
};

BookListPage.prototype.getMessageDialog = function() {
    return element(by.css(config.messageDialogSelector));
};

BookListPage.prototype.isMessageDialogVisible = function() {
    return this.getMessageDialog().getCssValue('display').then(function(returnVal) {
        return returnVal !== 'none';
    });
};

BookListPage.prototype.getDeleteButton = function(index) {
    return this.getBookList().get(index).element(by.css(config.deleteButtonSelector));
};

BookListPage.prototype.getYesButton = function() {
    return element.all(by.css(config.yesButtonSelector)).get(0);
};

BookListPage.prototype.getTitleByIndex = function(index) {
    return this.getBookList().get(index).element(by.binding('book.title')).getText();
};

module.exports = BookListPage;