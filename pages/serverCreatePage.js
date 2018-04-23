require('../pages/panelPage.js');
var serverCreatePage = function() {

	this.createNewServer = function() {
		element(by.binding("'crt_serv' | translate")).click();
    	element(by.binding("'to_servers_list' | translate")).click();
		browser.waitForAngular();
    	return require("./panelPage.js");
	};

};
module.exports = new serverCreatePage();