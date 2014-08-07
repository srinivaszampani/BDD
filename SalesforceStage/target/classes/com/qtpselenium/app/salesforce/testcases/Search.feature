Feature: Search for customer details in search field

As an agent,
I want to search for a customer's details in case
salesforce has not identified the incoming telephone number
and in case I want to proactively contact a customer and
I want to be able to search using a combination of digits and letters,
so I can type in a postcode or a name or a username or any information given by the customer.

@Search
Scenario Outline: Search for customer details in search field
Given I am logged in "<BrowserType>"
And I enter "SearchInput" as "<SearchField>"
When I click on "Search"
Then "<VerificationObject>" element should be present

 Examples:
 |	BrowserType		|      VerificationObject   |         SearchField       |
 |   IE             |         Customers         |         WizzKhalifa       |
