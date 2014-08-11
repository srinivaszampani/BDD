Feature: list of spam email addresses

As an administrator,
I should be able view the list of spam email addresses
and add/remove an email address to the spam list

@SpamEmailEdit
Scenario Outline: list of spam email addresses
Given I am logged in "<BrowserType>"
And I click on "TabArrow"
And I click on "SpamFolder"
When I click1 on "SpamId"
And I click on "Edit"
And I enter "" as "<EmailField>"
And I click on "Save"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|      VerificationObject   |      EmailField               |     
 |   IE             |        Spam Detail        |   Test12@gmail.com            | 