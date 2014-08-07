Feature: Cases in Contact Drivers Edited

As an Agent,
I want to see the contact drivers section
when I edit a case in the customer section

@ContactDriversEdited
Scenario Outline: Visibility of Contact Drivers Section when a new test case is added
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "Case"
And I click on "Edit"
And I click on "ContactDrivers1"
And I click on "TopDrivers1"
And I click on "Status1"
And I click on "CaseOrigin1"
And I click on "Save"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|	 ContactDriversList  |   VerificationObject       |     TopDriversList           |   StatusList       |  CaseOriginList    |
 |   IE             |    Promotions          |   ContactDriversSection    |    Promotion not received    |       New          |      Email         |