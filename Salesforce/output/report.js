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
  "duration": 240429800,
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
  "location": "LoginTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 3698421300,
  "status": "passed"
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
  "duration": 5213905900,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with id \u003d\u003d //*[@id\u003d\u0027username\u0027] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.21 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nSession ID: ce09f133-811f-4149-90b0-1e050b2de0e1\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{platform\u003dWINDOWS, javascriptEnabled\u003dtrue, elementScrollBehavior\u003d0, ignoreZoomSetting\u003dfalse, enablePersistentHover\u003dtrue, ie.ensureCleanSession\u003dfalse, browserName\u003dinternet explorer, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss, version\u003d8, ie.usePerProcessProxy\u003dfalse, ignoreProtectedModeSettings\u003dfalse, cssSelectorsEnabled\u003dtrue, requireWindowFocus\u003dfalse, initialBrowserUrl\u003dhttp://localhost:35748/, handlesAlerts\u003dtrue, ie.forceCreateProcessApi\u003dfalse, nativeEvents\u003dtrue, browserAttachTimeout\u003d0, ie.browserCommandLineSwitches\u003d, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:533)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:302)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:331)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:294)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.type(WebConnector.java:124)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_enter(LoginTest.java:35)\r\n\tat ✽.And I enter \"loginusername\" as \"xxxxx\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:10)\r\n"
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
  "duration": 66300,
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
  "location": "LoginTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 4288700,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchWindowException: Error retrieving window with handle current (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nSession ID: ce09f133-811f-4149-90b0-1e050b2de0e1\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{platform\u003dWINDOWS, javascriptEnabled\u003dtrue, elementScrollBehavior\u003d0, ignoreZoomSetting\u003dfalse, enablePersistentHover\u003dtrue, ie.ensureCleanSession\u003dfalse, browserName\u003dinternet explorer, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss, version\u003d8, ie.usePerProcessProxy\u003dfalse, ignoreProtectedModeSettings\u003dfalse, cssSelectorsEnabled\u003dtrue, requireWindowFocus\u003dfalse, initialBrowserUrl\u003dhttp://localhost:35748/, handlesAlerts\u003dtrue, ie.forceCreateProcessApi\u003dfalse, nativeEvents\u003dtrue, browserAttachTimeout\u003d0, ie.browserCommandLineSwitches\u003d, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:187)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:533)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:755)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:87)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:23)\r\n\tat ✽.Given I go to \"loginURL\" on \"IE\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\n"
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