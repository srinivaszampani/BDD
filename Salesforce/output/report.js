$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\qtpselenium\\app\\salesforce\\login\\login.feature\u0027");
formatter.feature({
  "id": "logging-into-salesforce",
  "description": "\r\nAs an Agent \r\nI want to login into salesforce",
  "name": "Logging into Salesforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;2",
  "tags": [
    {
      "name": "@login",
      "line": 6
    }
  ],
  "description": "",
  "name": "Logging in salesforce",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"loginURL\" on \"IE\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"xxxxx\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"zxxxx\"",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Login should be \"failure\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "LoginTest.Runmode_is(String)"
});
formatter.result({
  "duration": 238620300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "IE",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to(String,String)"
});
formatter.result({
  "duration": 428400,
  "status": "failed",
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tThe method window() is undefined for the type WebDriver.Options\n\tThe method timeouts() is undefined for the type WebDriver.Options\n\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:87)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_go_to(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"IE\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\n"
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
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "LoginTest.Then_login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "logging-into-salesforce;logging-in-salesforce;;3",
  "tags": [
    {
      "name": "@login",
      "line": 6
    }
  ],
  "description": "",
  "name": "Logging in salesforce",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to \"loginURL\" on \"IE\"",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"sri.zampani@tquila.com.fundqa\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"liverpool2\"",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Login should be \"success\"",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "LoginTest.Runmode_is(String)"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "IE",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to(String,String)"
});
formatter.result({
  "duration": 365000,
  "status": "failed",
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tThe method window() is undefined for the type WebDriver.Options\n\tThe method timeouts() is undefined for the type WebDriver.Options\n\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:87)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_go_to(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"IE\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\n"
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
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.Then_login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});