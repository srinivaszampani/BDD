Feature: list of spam email addresses

As an administrator,
I should be able view the list of spam email addresses
and add/remove an email address to the spam list

@SpamEmailNew
Scenario Outline: list of spam email addresses
Given I am logged in "<BrowserType>"
And I click on "TabArrow"
And I click on "SpamFolder"
And I click on "New2"
And I enter "Email" as "<EmailField>"
And I click on "Save3"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|      VerificationObject   |      EmailField          |     
 |   IE             |        Spam Detail        |   Testing8@gmail.com     | 