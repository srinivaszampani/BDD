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
  "name": "I go to \"loginURL\" on \"Mozilla\"",
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
  "duration": 195060800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 49926707900,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n1407420750873\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1407420750907\taddons.xpi\tDEBUG\tstartup\r\n1407420750908\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420750908\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420750911\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions\\webdriver-staging\r\n1407420750912\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420751007\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1405608062739,\"rdfTime\":1402020939000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\srinivas\\\\AppData\\\\Local\\\\Temp\\\\anonymous6790154848323811236webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1407420749304,\"rdfTime\":1407420749285}}}]\r\n1407420751014\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions.json\r\n1407420751015\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1407420751179\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1407420751181\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751181\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751181\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1407420751195\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1407420751196\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751196\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751203\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1407420751203\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1407420751203\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1407420751932\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1407420751960\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1407420751972\taddons.manager\tDEBUG\tshutdown\r\n1407420751973\taddons.xpi\tDEBUG\tshutdown\r\n1407420751973\taddons.xpi-utils\tDEBUG\tshutdown\r\n1407420752019\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1407420752019\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1407420752019\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1407420752022\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1407420752584\taddons.xpi\tDEBUG\tstartup\r\n1407420752585\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420752585\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420752586\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions\\webdriver-staging\r\n1407420752586\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420752594\taddons.xpi\tDEBUG\tNo changes found\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:68)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"Mozilla\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n1407420750873\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1407420750907\taddons.xpi\tDEBUG\tstartup\r\n1407420750908\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420750908\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420750911\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions\\webdriver-staging\r\n1407420750912\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420751007\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1405608062739,\"rdfTime\":1402020939000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\srinivas\\\\AppData\\\\Local\\\\Temp\\\\anonymous6790154848323811236webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1407420749304,\"rdfTime\":1407420749285}}}]\r\n1407420751014\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions.json\r\n1407420751015\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1407420751179\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1407420751181\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751181\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751181\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1407420751195\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1407420751196\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751196\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420751203\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1407420751203\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1407420751203\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1407420751932\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1407420751960\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1407420751972\taddons.manager\tDEBUG\tshutdown\r\n1407420751973\taddons.xpi\tDEBUG\tshutdown\r\n1407420751973\taddons.xpi-utils\tDEBUG\tshutdown\r\n1407420752019\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1407420752019\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1407420752019\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1407420752022\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1407420752584\taddons.xpi\tDEBUG\tstartup\r\n1407420752585\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420752585\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420752586\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous6790154848323811236webdriver-profile\\extensions\\webdriver-staging\r\n1407420752586\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420752594\taddons.xpi\tDEBUG\tNo changes found\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:106)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:68)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:42)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n"
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
  "name": "I go to \"loginURL\" on \"Mozilla\"",
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
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_Go_To_Salesforce(String,String)"
});
formatter.result({
  "duration": 46060058600,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n1407420797980\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1407420797990\taddons.xpi\tDEBUG\tstartup\r\n1407420797990\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420797990\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420797992\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions\\webdriver-staging\r\n1407420797993\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420798001\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1405608062739,\"rdfTime\":1402020939000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\srinivas\\\\AppData\\\\Local\\\\Temp\\\\anonymous7189944678704489198webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1407420797607,\"rdfTime\":1407420797588}}}]\r\n1407420798005\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions.json\r\n1407420798006\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1407420798035\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1407420798036\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798037\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798037\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1407420798038\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1407420798039\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798039\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798045\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1407420798045\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1407420798045\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1407420798276\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1407420798317\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1407420798341\taddons.manager\tDEBUG\tshutdown\r\n1407420798341\taddons.xpi\tDEBUG\tshutdown\r\n1407420798341\taddons.xpi-utils\tDEBUG\tshutdown\r\n1407420798372\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1407420798372\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1407420798372\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1407420798374\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1407420798616\taddons.xpi\tDEBUG\tstartup\r\n1407420798616\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420798617\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420798618\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions\\webdriver-staging\r\n1407420798619\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420798633\taddons.xpi\tDEBUG\tNo changes found\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n\nBuild info: version: \u00272.28.0\u0027, revision: \u002718309\u0027, time: \u00272012-12-11 20:21:45\u0027\nSystem info: os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_65\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:68)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat ✽.Given I go to \"loginURL\" on \"Mozilla\"(com\\qtpselenium\\app\\salesforce\\login\\login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n1407420797980\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1407420797990\taddons.xpi\tDEBUG\tstartup\r\n1407420797990\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420797990\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420797992\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions\\webdriver-staging\r\n1407420797993\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420798001\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1405608062739,\"rdfTime\":1402020939000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\srinivas\\\\AppData\\\\Local\\\\Temp\\\\anonymous7189944678704489198webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1407420797607,\"rdfTime\":1407420797588}}}]\r\n1407420798005\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions.json\r\n1407420798006\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1407420798035\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1407420798036\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798037\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798037\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1407420798038\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1407420798039\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798039\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1407420798045\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1407420798045\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1407420798045\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1407420798276\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1407420798317\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1407420798341\taddons.manager\tDEBUG\tshutdown\r\n1407420798341\taddons.xpi\tDEBUG\tshutdown\r\n1407420798341\taddons.xpi-utils\tDEBUG\tshutdown\r\n1407420798372\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1407420798372\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1407420798372\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1407420798374\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n1407420798616\taddons.xpi\tDEBUG\tstartup\r\n1407420798616\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1407420798617\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1407420798618\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\srinivas\\AppData\\Local\\Temp\\anonymous7189944678704489198webdriver-profile\\extensions\\webdriver-staging\r\n1407420798619\taddons.xpi\tDEBUG\tcheckForChanges\r\n1407420798633\taddons.xpi\tDEBUG\tNo changes found\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:106)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:244)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:110)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:183)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:179)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:92)\r\n\tat com.qtpselenium.app.salesforce.util.WebConnector.openBrowser(WebConnector.java:68)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.I_Go_To_Salesforce(LoginTest.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:42)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:193)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:52)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:191)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:42)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:184)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:236)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n"
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