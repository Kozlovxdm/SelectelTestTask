describe('create and delete server test suite', function() {
  var EC = protractor.ExpectedConditions;	
  browser.get('http://vscale.io');

  it('should log in', function() {
    element(by.css("div.user a[href*='/panel/login']")).click(); 
    browser.wait(EC.presenceOf(element(by.model("vm.email_or_login"))), 5000); 
    element(by.model("vm.email_or_login")).sendKeys(browser.params.login.user);
    element(by.css("input[type=password]")).sendKeys(browser.params.login.password);
    element(by.binding("'to_login' | translate")).click();
  });  

  it('should create server', function() {	
    var loader = element(by.css("div.brand-loader"));	
    browser.wait(EC.invisibilityOf(loader), 5000);

    element(by.css("button[href*='scalets/new']")).click();
    element(by.binding("'crt_serv' | translate")).click();
    element(by.binding("'to_servers_list' | translate")).click();
  });
  
  it('should check server status run', function() {
    browser.refresh();
    var serverStatus = element.all(by.css("div.state div[stl='scalet_cell_status']")).get(0).getText();      
    var notPresentInstall = EC.not(EC.textToBePresentInElement(serverStatus, 'Устанавливается'));
    var notPresentInstalled = EC.not(EC.textToBePresentInElement(serverStatus, 'Установлен'));
    browser.wait(notPresentInstall, 60000);
    browser.wait(notPresentInstalled, 5000); 
    expect(serverStatus.getText()).toEqual('Запущен');
  });

  it('should go to server page', function() {
    element.all(by.css("div.scalet-in")).get(0).click();
  });

  it('should delete server', function() {
    element(by.css("li[href*='delete']")).click();
    element(by.css("label")).click();
    var serverName = element(by.css("div[stl='modal_delete_scalet_name']")).getText();
    element(by.model("captcha_input")).sendKeys(serverName);
    element(by.css("button[type='submit']")).click();
  });

  it('should check server status delete', function() {
    var serverStatus = element.all(by.css("div.state div[stl='scalet_cell_status']")).get(0).getText();      
    var textNotPresent = EC.not(EC.textToBePresentInElement(serverStatus, 'Удаление сервера'));
    browser.wait(textNotPresent, 30000); 
    expect(serverStatus.getText()).toEqual('Удалён');

    element(by.css("a[stl='menu_logout']")).click();
    browser.refresh();
  });
});
