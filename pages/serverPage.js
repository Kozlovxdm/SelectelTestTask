require('../pages/panelPage.js');
var serverPage = function() {

	this.deleteServer = function() {
	    element(by.css("li[href*='delete']")).click();
  	    element(by.css("label")).click();
  	    var serverName = element(by.css("div[stl='modal_delete_scalet_name']")).getText();
    	    element(by.model("captcha_input")).sendKeys(serverName);
    	    element(by.css("button[type='submit']")).click();
    	    browser.waitForAngular();
    	    return require('./panelPage.js');
	};

};
module.exports = new serverPage();
