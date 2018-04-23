require('../pages/serverCreatePage.js');
require('../pages/serverPage.js');
var panelPage = function() {
	var EC = protractor.ExpectedConditions;

	this.waitBrandLoad = function() {
	    var loader = element(by.css("div.brand-loader"));	
	    browser.wait(EC.invisibilityOf(loader), 5000);
	};

	this.createServer = function() {
	    browser.wait(EC.urlContains('/panel/scalets/'), 5000);
	    element(by.css("button[href*='scalets/new']")).click();
	    browser.waitForAngular();
	    return require('./serverCreatePage.js');
	};

	this.refreshPage = function() {
	    browser.refresh();
	};

	this.waitInstallServer = function() {
	    var serverStatus = element.all(by.css("div.state div[stl='scalet_cell_status']")).get(0).getText();   
  	    var notPresentInstall = EC.not(EC.textToBePresentInElement(serverStatus, 'Устанавливается'));
  	    var notPresentInstalled = EC.not(EC.textToBePresentInElement(serverStatus, 'Установлен'));
  	    browser.wait(notPresentInstall, 60000);
  	    browser.wait(notPresentInstalled, 5000);
	};

	this.waitDeleteServer = function() {
	    browser.waitForAngular();
	    var serverStatus = element.all(by.css("div.state div[stl='scalet_cell_status']")).get(0).getText();      
  	    var textNotPresent = EC.not(EC.textToBePresentInElement(serverStatus, 'Удаление сервера'));
  	    browser.wait(textNotPresent, 30000); 
	};

	this.getServerStatus = function() {
	    return element.all(by.css("div.state div[stl='scalet_cell_status']")).get(0).getText();
	    browser.waitForAngular();
	};

	this.goToNewServerPage = function() {
	    element.all(by.css("div.scalet-in")).get(0).click();
	    browser.waitForAngular();
	    return require('./serverPage.js');
	};

};
module.exports = new panelPage();
