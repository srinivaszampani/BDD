Feature: Log Calls from and to customers

As an agent,
I want every call that I take and that I make to be logged against the customer
so that I can see a track record of the customers communication with Rank

@LogCalls
Scenario Outline: Log Calls from and to customers
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "NewCase"
And I click on "NewCustomer"
And I click on "Continue"
And I click on "ContactDrivers"
And I click on "TopDrivers"
And I click on "Status"
And I click on "CaseOrigin"
And I click on "Save"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|	 ContactDriversList  |   VerificationObject       |     TopDriversList           |   StatusList       |  CaseOriginList    |
 |   IE             |    Promotions          |   Additional Information   |    Promotion not received    |       New          |      Email         |