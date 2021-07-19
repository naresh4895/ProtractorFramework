let homepagecsp = function () {
    let advanced_button = element(by.id('details-button'));
    let advanced_buttonproceed = element(by.id('proceed-link'));
    let username = element(by.id('userNameInput'));
    let password = element(by.id('passwordInput'));
    let submitButton = element(by.id('submitButton'));
    let advanced_button1 = element(by.id('details-button'));
    let advanced_buttonproceed1 = element(by.id('proceed-link'));
    let username1 = element(by.id('userNameInput'));
    let password1 = element(by.id('passwordInput'));
    let submitButton1 = element(by.id('submitButton'));
    let RoleList = element(by.id('RoleList'));
    let RoleListconsultant = element(by.id('RoleList')).element(by.css("option[value='16038']"));
    let roleclick = element(by.id('btnOk'));
    let hometileclick = element(by.className('homepage-card'));
    let clickdoctor = element(by.className('col-xs-8 clinic-card-name cmn-text-break'));
    let search = element(by.id('mat-input-1'));
    let searchclick = element(by.className('mat-focus-indicator search-icon-display mat-icon-button mat-button-base ng-star-inserted'));
    let more = element(by.css('button[aria-label="more"]'));

    this.get = function (url) {
        browser.get(url);
    };

    this.clickadvance = function () {
        advanced_button.click();
    };
    this.proceedlink = function () {
        advanced_buttonproceed.click();
    };
    this.uname = function (user) {
        username.sendKeys(user);
    };
    this.upwd = function (passwd) {
        password.sendKeys(passwd);
    };
    this.submit = function () {
        submitButton.click();
    };
    this.clickadvance1 = function () {
        advanced_button1.click();

    };
    this.proceedlink1 = function () {
        advanced_buttonproceed1.click();
    };
    this.uname1 = function (user1) {
        username1.sendKeys(user1);
    };
    this.upwd1 = function (passwd1) {
        password1.sendKeys(passwd1);
    };
    this.submit1 = function () {
        submitButton1.click();
    };
    this.roles = function () {
        RoleList.click();
    };

    this.selectrole = function () {
        RoleListconsultant.click();

    };
    this.clickingrole = function () {
        roleclick.click();
    };

    this.hometile = function () {
        hometileclick.click();
    };
    this.clickingdoctor = function () {
        clickdoctor.click();
    };
    this.searchpatient = function (patient) {
        search.sendKeys(patient);

    };
    this.searchbutton = function () {
        searchclick.click();

    };
    this.clickmore = function () {
        more.click();
    }
};

module.exports = new homepagecsp();