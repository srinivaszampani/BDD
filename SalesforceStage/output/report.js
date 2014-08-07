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
  "duration": 247613100,
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
  "duration": 20560588400,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:201)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setup(InternetExplorerDriver.java:103)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:49)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"IE\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:506)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:201)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setup(InternetExplorerDriver.java:103)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:49)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:42)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:17964/status] to be available after 20007 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:104)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:163)\r\n\t... 62 more\r\nCaused by: com.google.common.util.concurrent.UncheckedTimeoutException: java.util.concurrent.TimeoutException\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:143)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:79)\r\n\t... 63 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:130)\r\n\t... 64 more\r\n"
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
  "name": "I enter \"loginusername\" as \"sri.zampani@rankinteractive.com.config\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"Liverpool1\"",
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
  "duration": 57000,
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
  "duration": 20004748000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:201)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setup(InternetExplorerDriver.java:103)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:49)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"IE\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:506)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:201)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setup(InternetExplorerDriver.java:103)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:49)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:42)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:49065/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:104)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:163)\r\n\t... 62 more\r\nCaused by: com.google.common.util.concurrent.UncheckedTimeoutException: java.util.concurrent.TimeoutException\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:143)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:79)\r\n\t... 63 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:130)\r\n\t... 64 more\r\n"
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