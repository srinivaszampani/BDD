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
  "duration": 182490800,
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
  "duration": 4580282200,
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
  "duration": 416168200,
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
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 179875900,
  "status": "passed"
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
  "duration": 880528300,
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
  "duration": 5035667400,
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
  "duration": 95900,
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
  "duration": 330936100,
  "status": "passed"
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
  "duration": 626483000,
  "status": "passed"
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
  "duration": 481182300,
  "status": "passed"
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
  "duration": 2871218600,
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
  "duration": 3795829000,
  "status": "passed"
});
});