package com.qtpselenium.app.salesforce.testcases;

import java.io.IOException;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CommonUtil {
	WebConnector selenium = WebConnector.getInstance(); //new WebConnector();
	

	@Given("^I am logged in \"([^\"]*)\"$")
	public void I_am_logged_in(String browser) throws IOException{
		// check if logged in the browser.. if not.. login
		
		selenium.openBrowser(browser);
		if(!selenium.isLoggedIn()){
			selenium.log("Opening browser and logging in as a default user");
			// login the user - your task
			selenium.doDefaultLogin();
			selenium.capturescreenshot("Login");
		}
	}
	
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_on(String object) throws IOException{
		selenium.log("Clicking on "+object);
		selenium.click(object);
		selenium.capturescreenshot("Login");
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object,String text) throws IOException{
		selenium.log("Typing in "+object);
		System.out.println("Entering in "+ object +" value "+ text);
		selenium.type(text, object);
		selenium.capturescreenshot("Notes");

    }
	
	@When("^I click1 on \"([^\"]*)\"$")
	public void I_click1_on(String object) throws IOException{
		selenium.log("Clicking on "+object);
		selenium.click(object);
		selenium.capturescreenshot("Email");
	}
	
	
	@Then("^\"([^\"]*)\" element should be present$")
	public void Element_Should_Be_Present(String object){
		selenium.log("Element_Should_Be_Present  " + object);
		//Assert.assertTrue("Object not found "+object , selenium.isElementPresent(object));
	}

}