Feature: Editing notes in test cases

As a user,
I must see if the following fields have been edited so that I can have an audit trail of changes: 
- any of the contact drivers section 
- any of the description information section

@NotesEdit
Scenario Outline: Editing notes in test cases
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "Case0"
And I click on "Edit"
And I click on "ContactDrivers1"
And I click on "TopDrivers1"
And I click on "Status1"
And I click on "CaseOrigin1"
And I click on "Save"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |     
 |   IE             |         CaseComments      | 