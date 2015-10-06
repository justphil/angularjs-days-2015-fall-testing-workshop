describe('Directive messageDialog', function() {

    var $compile, $rootScope;

    var template = '<message-dialog visible="dialogVisible" \
    title="dialogTitle" \
    on-yes="performDeletion()" \
    on-no="cancelDeletion()"> \
    Wollen Sie das Buch <strong>{{bookToDelete.title}}</strong> wirklich löschen? \
</message-dialog>';

    beforeEach(module('ajsDaysApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should set properly the passed title', function() {
        var parentScope = $rootScope.$new();
        parentScope.dialogTitle = 'TEST';
        var linkFn = $compile(template);
        var jqElem = linkFn(parentScope);

        parentScope.$apply();

        expect(jqElem.find('div.title').text()).toBe(parentScope.dialogTitle);
    });

    it('should an isolated scope', function() {
        var parentScope = $rootScope.$new();
        parentScope.dialogTitle = 'TEST';
        var linkFn = $compile(template);
        var jqElem = linkFn(parentScope);
        parentScope.$apply();

        var directiveScope = angular.element(jqElem.children()[0]).scope();

        expect(directiveScope.dialogTitle).toBeUndefined();
    });

    it('should an isolated scope', function() {
        var parentScope = $rootScope.$new();
        parentScope.dialogTitle = 'TEST';
        var linkFn = $compile(template);
        var jqElem = linkFn(parentScope);
        parentScope.$apply();

        var directiveScope = angular.element(jqElem.children()[0]).scope();

        expect(directiveScope).not.toBe(parentScope);
    });

});