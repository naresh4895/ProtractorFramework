/*var fs = require('fs');*/
let homepage = require('../pages/homepageCSP');

describe('CSP demo login', function () {

    browser.manage().window().maximize();
    it('CSP login test', function () {

    });
    browser.waitForAngularEnabled(false);
    //browser.get('https://papadfs01.pap.tech/adfs/oauth2/authorize/?client_id=09750baa-3cd2-4167-82b6-ca73a9f1e7cf&response_type=code&scope=openid%20profile&redirect_uri=https%3A%2F%2Forch.personas.dev-uat.mm.52.172.150.3.nip.io%2Fsecurityservice%2FIdentity%2Fcallback&state=VGh1cnNkYXksIDI0IEp1bmUgMjAyMTUzOA%3D%3D&prompt=login&response_mode=query');
    homepage.get('https://papadfs01.pap.tech/adfs/oauth2/authorize/?client_id=09750baa-3cd2-4167-82b6-ca73a9f1e7cf&response_type=code&scope=openid%20profile&redirect_uri=https%3A%2F%2Forch.personas.dev-uat.mm.52.172.150.3.nip.io%2Fsecurityservice%2FIdentity%2Fcallback&state=VGh1cnNkYXksIDI0IEp1bmUgMjAyMTUzOA%3D%3D&prompt=login&response_mode=query');
    browser.sleep(2000);


    //element(by.id('details-button')).click();
    homepage.clickadvance();

    //element(by.id('proceed-link')).click();
    homepage.proceedlink();
    browser.sleep(2000);

    //element(by.id('userNameInput')).sendKeys('714489@pap.tech');
    homepage.uname('714489@pap.tech');

    //element(by.id('passwordInput')).sendKeys('Apollo@123');
    homepage.upwd('Apollo@123');

    //element(by.id('submitButton')).click();
    homepage.submit();
    browser.sleep(2000);

    //element(by.id('details-button')).click();
    homepage.clickadvance1();

    //element(by.id('proceed-link')).click();
    homepage.proceedlink1();
    browser.sleep(3000);

    //element(by.id('userNameInput')).sendKeys('714489@pap.tech');
    homepage.uname1('714489@pap.tech');

    //element(by.id('passwordInput')).sendKeys('Apollo@123');
    homepage.upwd1('Apollo@123');

    //element(by.id('submitButton')).click();
    homepage.submit1();
    browser.sleep(2000);

    //element(by.id('RoleList')).click();
    homepage.roles();
    //browser.sleep(3000);

    //element(by.id('RoleList')).element(by.css("option[value='16038']")).click();
    homepage.selectrole();
    browser.sleep(3000);

    //element(by.id('btnOk')).click();
    homepage.clickingrole();
    browser.sleep(4000);

    //browser.waitForAngularEnabled(true);
    //browser.get('https://cspdevuatfunc.azurewebsites.net/#/Homepage');
    //element(by.className('homepage-card')).click();
    homepage.hometile();
    browser.sleep(4000);

    homepage.clickingdoctor();
    browser.sleep(8000);

    homepage.searchpatient('ANM1.0000416897');
    homepage.searchbutton();
    browser.sleep(4000);

    homepage.clickmore();

    browser.sleep(4000);

    //To take the screenshot for after specfic action
    /* browser.takeScreenshot().then(function (fullpage) {
         var stream = fs.createWriteStream('./target/screenshots/screenshots/fullpage.png');
         stream.write(new Buffer(fullpage,'base64'));
         stream.end();
     
     });*/





});