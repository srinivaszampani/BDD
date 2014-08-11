Feature: Logging into Salesforce

As an Agent 
I want to login into salesforce

@login
Scenario Outline: Logging in salesforce
Given Runmode is "<Runmode>"
Given I go to "loginURL" on "<Browser>"
And I enter "loginusername" as "<Username>"
And I enter "loginpassword" as "<Password>"
And I click on "loginButton"
Then Login should be "<Expected_Result>"

 Examples:
|Runmode  | Browser    | Username            			        | Password 	      | Expected_Result |
|  Y      | IE         | xxxxx    						        | zxxxx           | failure         |
|  Y      | IE         | sri.zampani@tquila.com.fundqa          | liverpool2      | success         |
 