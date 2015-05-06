$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3124525482,
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
  "duration": 753752982,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 147540533,
  "status": "passed"
});
});