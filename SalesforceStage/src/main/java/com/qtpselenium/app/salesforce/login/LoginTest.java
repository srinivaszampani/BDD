package com.qtpselenium.app.salesforce.login;



import org.junit.Assert;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.PendingException;

//step layer
public class LoginTest{
	WebConnector selenium = WebConnector.getInstance(); //new WebConnector();
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_Go_To_Salesforce(String URL,String browser){
		System.out.println("I am going to "+ URL +" on  "+ browser);
		selenium.openBrowser(browser);
		selenium.navigate(URL);
	}
	@Given("^Runmode is \"([^\"]*)\"$")
	public void Runmode_is(String Runmode){
		if(Runmode.equals("N"))
			throw new PendingException("Skipping the test as Runmode is No");
	}
	
	@Then("^Login should be \"([^\"]*)\"$")
	public void Then_login_should_be(String expectedResult){
		System.out.println("Login - "+ expectedResult);
		boolean result=selenium.isElementPresent("searchText");
		String actualResult=null;
		
		if(result)
			actualResult="success";
		else
			actualResult="failure";
		
		Assert.assertEquals(expectedResult, actualResult);
	}
	

}

