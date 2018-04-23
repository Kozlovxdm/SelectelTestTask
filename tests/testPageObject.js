describe('create and delete server test use PageObject', function() {
  var loginPage = require('../pages/loginPage.js');

  it('should check server status create/delete', function() {
    browser.get('http://vscale.io/panel/login');
    var panelPage = loginPage.login(browser.params.login.user, browser.params.login.password);
    panelPage.waitBrandLoad();
    var serverCreatePage = panelPage.createServer();
    serverCreatePage.createNewServer();
    panelPage.refreshPage();
    panelPage.waitInstallServer();
    expect(panelPage.getServerStatus()).toEqual("Запущен");

    var serverPage = panelPage.goToNewServerPage();
    serverPage.deleteServer();
    panelPage.waitDeleteServer();
    expect(panelPage.getServerStatus()).toEqual("Удалён");
    browser.close();
  });
});