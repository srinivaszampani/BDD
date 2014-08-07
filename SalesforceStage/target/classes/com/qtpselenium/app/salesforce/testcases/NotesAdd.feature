Feature: Adding notes in new test cases

As an agent,
I want to see the notes entered by my colleagues regarding each contact made
so that I can understand the background of a customer's query. 

@NotesAdd
Scenario Outline: Adding notes in new test cases
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "New"
And I click on "ContactDrivers"
And I click on "TopDrivers"
And I click on "Status"
And I click on "CaseOrigin"
And I enter "Subject" as "<Subjectfield>"
And I enter "Description" as "<Descriptionfield>"
And I enter "InternalComments" as "<Descriptionfield>"
And I click on "Save1"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |      Subjectfield        |     Descriptionfield      |      InternalCommentsfield     |
 |   IE             |         CaseComments      |       TestSubject        |    TsetDescriptionfield   |   TestInternalCommentsfield    |
        