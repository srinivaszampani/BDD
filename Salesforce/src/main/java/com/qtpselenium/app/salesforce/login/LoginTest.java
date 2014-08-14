package com.qtpselenium.app.salesforce.login;



import java.io.IOException;

import org.junit.Assert;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.And;
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
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text) throws IOException{
		selenium.log("Typing in "+object);
		System.out.println("Entering in "+ object +" value "+ text);
		selenium.type(text, object);
		selenium.capturescreenshot("Notes");

    }
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_on(String object) throws IOException{
		selenium.log("Clicking on "+object);
		selenium.click(object);
		selenium.capturescreenshot("Login");
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

