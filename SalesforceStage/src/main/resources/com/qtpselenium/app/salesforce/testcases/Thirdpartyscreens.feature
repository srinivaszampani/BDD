Feature: logging into salesforce and 3rd party screens

As an agent,
I want to login once to each third party tool 
and stay connected as long as I am active in Salesforce,
so I don't waste time having to login again whilst in contact with a customer.

@Thirdpartyscreens
Scenario Outline: Logging into salesforce and 3rd party screens
Given I am logged in "<BrowserType>"
When I click1 on "ThirdPartyLinks"
Then All tabs on menu are opened

 Examples:
 |	BrowserType		|        
 |   IE             |           