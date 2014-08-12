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
  "name": "I go to \"loginURL\" on \"Chrome\"",
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
  "duration": 183203500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_Salesforce(String,String)"
});
formatter.result({
  "duration": 56716083400,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Unable to either launch or connect to Chrome. Please check that ChromeDriver is up-to-date. Using Chrome binary at: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 56.45 seconds\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:533)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:111)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:115)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:161)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:107)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:74)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_go_to_Salesforce(LoginTest.java:23)\r\n\tat ✽.Given I go to \"loginURL\" on \"Chrome\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxxx",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "zxxxx",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "I go to \"loginURL\" on \"Chrome\"",
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
  "duration": 67100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_Salesforce(String,String)"
});
formatter.result({
  "duration": 56015571200,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Unable to either launch or connect to Chrome. Please check that ChromeDriver is up-to-date. Using Chrome binary at: C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 56.14 seconds\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:533)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:111)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:115)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:161)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:107)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:74)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_go_to_Salesforce(LoginTest.java:23)\r\n\tat ✽.Given I go to \"loginURL\" on \"Chrome\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "sri.zampani@tquila.com.fundqa",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "liverpool2",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
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