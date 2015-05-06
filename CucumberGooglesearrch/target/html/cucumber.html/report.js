$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3584908622,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Advance Search in Google",
  "description": "",
  "id": "google-search;advance-search-in-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter \"testing\" text into search field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on advance search icon",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on advance search link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on advance search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify first link text \"testing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStep.user_is_on_google_search_page()"
});
formatter.result({
  "duration": 883531372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 7
    }
  ],
  "location": "GoogleStep.User_enters_text_into_field(String)"
});
formatter.result({
  "duration": 30194830888,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"gbqfq\"}\nCommand duration or timeout: 30.19 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027AD01106753\u0027, ip: \u002710.12.52.71\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d37.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 84a86fe7-80ff-42b6-910f-1555ebf7b852\n*** Element info: {Using\u003did, value\u003dgbqfq}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:393)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.cucumber.googlesearch.CucumberGooglesearrch.GoogleStep.User_enters_text_into_field(GoogleStep.java:38)\r\n\tat ✽.When enter \"testing\" text into search field(GoogleScenario.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"gbqfq\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027AD01106753\u0027, ip: \u002710.12.52.71\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/NAVER/AppData/Local/Temp/anonymous4325396286819967953webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10271)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/NAVER/AppData/Local/Temp/anonymous4325396286819967953webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:603)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleStep.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_search_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_search_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStep.click_on_advance_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 24
    }
  ],
  "location": "GoogleStep.verify_first_link_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15129654,
  "status": "passed"
});
});