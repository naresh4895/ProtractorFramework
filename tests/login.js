describe('demo login', function () {

    it('login test', function () {

    });
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('200');
    element(by.model('second')).sendKeys('2');
    //element(by.model('operator')).click();
    element(by.xpath('/html/body/div/div/form/select/option[3]')).click('');
    element(by.id('gobutton')).click();
    browser.sleep(3000);

});