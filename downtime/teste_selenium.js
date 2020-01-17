// Install firefox-profile package
//npm install firefox-profile

var webdriver = require('selenium-webdriver');
var FirefoxProfile = require('firefox-profile');
var myProfile = new FirefoxProfile();

myProfile.setPreference('plugin.state.flash', 0);
myProfile.updatePreferences();

myProfile.encoded(function(encodedProfile) {

  // Input capabilities
  var capabilities = {
    'browserName' : 'firefox', 
    'browserstack.user' : 'USERNAME',
    'browserstack.key' : 'ACCESS_KEY',
    'browserstack.debug' : 'true',
    'name': 'Bstack-[NodeJS] Firefox Profile Test',
    'firefox_profile' : encodedProfile
  }

  var driver = new webdriver.Builder().
    usingServer('http://hub-cloud.browserstack.com/wd/hub').
    withCapabilities(capabilities).
    build();

  driver.get('http://www.20dollarbanners.com/flash-banner').then(function(){
    driver.quit();
  });

});