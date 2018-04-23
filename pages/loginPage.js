require("../pages/panelPage.js");
var loginPage = function() {
    var EC = protractor.ExpectedConditions;

	this.login = function(user, password) {
        browser.wait(EC.presenceOf(element(by.model("vm.email_or_login"))), 5000);
		element(by.model("vm.email_or_login")).sendKeys(user);
    	element(by.css("input[type=password]")).sendKeys(password);
    	var loader = element(by.css("div.brand-loader"));	
	    browser.wait(EC.invisibilityOf(loader), 5000);
    	element(by.binding("'to_login' | translate")).click();
    	browser.waitForAngular();
    	return require("./panelPage.js");
	};

};
module.exports = new loginPage();