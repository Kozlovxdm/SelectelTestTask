exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },
  params: {login: { 
    user: '40829', 
    password: '8BMHcM6hFb'}},
  
  specs: ['../tests/testSuite.js'],      //тест пошаговый
      // '../tests/testPageObject.js '   //тест с паттерном PageObject
  
  getPageTimeout: 30000,
  allScriptsTimeout: 30000,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
  }
};
