Feature: OutgoingEmail

As an agent,
I should be able to send emails to customers 

@OutgoingEmail
Scenario Outline: Sending emails to the customers
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
And I click on "Customer"
And I click on "SendingMail"
And I enter "Subject1" as "<Subjectfield>"
And I enter "Body" as "<Bodyfield>"
When I click1 on "Send"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |      Subjectfield        |     Bodyfield      |     
 |   IE             |       ActivityHistory     |       TestSubject        |    TestBodyfield   |