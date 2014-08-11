Feature: Contact Drivers New Case

As an Agent,
I want to see the contact drivers section
when I add a new case in the customer section

@ContactDriversNew
Scenario Outline: Visibility of Contact Drivers Section when a new test case is added
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "NewCase"
And I click on "ContactDrivers"
And I click on "TopDrivers"
And I click on "Status"
And I click on "CaseOrigin"
And I click on "Save"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|	 ContactDriversList  |   VerificationObject       |     TopDriversList           |   StatusList       |  CaseOriginList    |
 |   IE             |    Promotions          |   ContactDriversSection    |    Promotion not received    |       New          |      Email         |