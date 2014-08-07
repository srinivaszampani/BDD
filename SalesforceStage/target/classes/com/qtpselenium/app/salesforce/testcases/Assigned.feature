Feature: Customer Status changed to "Assigned"

As an agent,
when I deal with a case must assign it to myself and change the status to "Assigned"

@Assigned
Scenario Outline: Customer Status changed to "Assigned"
Given I am logged in "<BrowserType>"
And I click on "Cases"
And I click on "Button"
And I click on "CaseNumber"
And I click on "Change"
And I enter "NewUser" as "<UserField>"
And I click on "Save7"
And I click on "Edit"
When I click1 on "Status4" 
And I click on "Save0"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |         UserField         |
 |   IE             |         Assigned          |        Sri Zampani        |
