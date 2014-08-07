$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\qtpselenium\\app\\salesforce\\login\\login.feature");
formatter.feature({
  "id": "logging-into-salesforce",
  "description": "\r\nAs an Agent \r\nI want to login into salesforce",
  "name": "Logging into Salesforce",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "logging-into-salesforce;logging-in-salesforce",
  "tags": [
    {
      "name": "@login",
      "line": 6
    }
  ],
  "description": "",
  "name": "Logging in salesforce",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I enter \"loginusername\" as \"\u003cUsername\u003e\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"\u003cPassword\u003e\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I click on \"loginButton\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then ",
  "line": 13
});
formatter.examples({
  "id": "logging-into-salesforce;logging-in-salesforce;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 15,
  "rows": [
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;1",
      "cells": [
        "Runmode",
        "Browser",
        "Username",
        "Password",
        "Expected_Result"
      ],
      "line": 16
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;2",
      "cells": [
        "Y",
        "IE",
        "xxxxx",
        "zxxxx",
        "failure"
      ],
      "line": 17
    },
    {
      "id": "logging-into-salesforce;logging-in-salesforce;;3",
      "cells": [
        "Y",
        "IE",
        "sri.zampani@rankinteractive.com.config",
        "Liverpool1",
        "success"
      ],
      "line": 18
    }
  ]
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
  "duration": 129000462,
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
  "duration": 9592142804,
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
  "location": "CommonUtil.I_enter(String,String)"
});
formatter.result({
  "duration": 2375783002,
  "status": "passed"
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
  "location": "CommonUtil.I_enter(String,String)"
});
formatter.result({
  "duration": 2341559373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "CommonUtil.I_click_on(String)"
});
formatter.result({
  "duration": 2365988058,
  "status": "passed"
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
  "duration": 5201313311,
  "status": "passed"
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
  "duration": 113786,
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
  "duration": 698396380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "sri.zampani@rankinteractive.com.config",
      "offset": 28
    }
  ],
  "location": "CommonUtil.I_enter(String,String)"
});
formatter.result({
  "duration": 2382325013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "Liverpool1",
      "offset": 28
    }
  ],
  "location": "CommonUtil.I_enter(String,String)"
});
formatter.result({
  "duration": 2215293339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "CommonUtil.I_click_on(String)"
});
formatter.result({
  "duration": 3345561954,
  "status": "passed"
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
  "duration": 5079253334,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.qtpselenium.app.salesforce.login.LoginTest.Then_login_should_be(LoginTest.java:40)\r\n\tat ✽.Then Login should be \"success\"(main\\resources\\com\\qtpselenium\\app\\salesforce\\login\\login.feature:13)\r\n"
});
formatter.uri("main\\resources\\com\\qtpselenium\\app\\salesforce\\testcases\\Assigned.feature");
formatter.feature({
  "id": "customer-status-changed-to-\"assigned\"",
  "description": "\r\nAs an agent,\r\nwhen I deal with a case must assign it to myself and change the status to \"Assigned\"",
  "name": "Customer Status changed to \"Assigned\"",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "customer-status-c