Feature: Customer personal details

As an agent,
I want to see the customers' personal details on the default screen
so that I can verify the customers' identification  

@CustomerDetails
Scenario Outline: Sending emails to the customers
Given I am logged in "<BrowserType>"
And I click on "CustomersTab"
And I click on "AllCustomers"
When I click1 on "Customer"
Then "<VerificationObject>" element should be present

Examples:
 |	BrowserType		|      VerificationObject   | 
 |   IE             |       Customer Detail     |