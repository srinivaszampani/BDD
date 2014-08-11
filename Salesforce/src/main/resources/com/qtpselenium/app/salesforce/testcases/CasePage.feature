Feature: Case Page - Additional Information Section

As a agent,
I want to the additional information section to have relevant field values when I create/edit a case

@CasePage
Scenario Outline: Case Page - Additional Information Section
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "NewCase"
And I click on "NormalCustomer"
And I click on "Continue"
And I click on "ContactDrivers"
And I click on "TopDrivers"
And I click on "Status"
And I click on "CaseOrigin"
And I click on "Save"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |     
 |   IE             |         CaseComments      | 