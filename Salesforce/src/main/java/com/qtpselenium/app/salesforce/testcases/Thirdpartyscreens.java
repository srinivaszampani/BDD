package com.qtpselenium.app.salesforce.testcases;

import java.io.IOException;

import org.junit.Assert;

import com.qtpselenium.app.salesforce.util.WebConnector;

import cucumber.api.java.en.Then;
/*
public class Thirdpartyscreens {
	WebConnector selenium = WebConnector.getInstance(); //new WebConnector();
	
	
	@Then("^All tabs on menu are opened$")
	public void All_tabs_on_menu_are_opened() throws IOException, InterruptedException{
		selenium.getWindowIds();
		selenium.capturescreenshot("All Windows");
		Assert.assertEquals(4, selenium.getWindowIds());
		}
		

	}
	

/*
Set<String> winIds = driver.getWindowHandles();
Iterator<String> it= winIds.iterator();
winIds = driver.getWindowHandles();
it= winIds.iterator();
String mainWindowId = it.next();
String tabWindId = it.next();
driver.switchTo().window(objectName);
driver.findElement(By.xpath("html/body/font/table/tbody/tr[2]/td[2]/form/table/tbody/tr[1]/td[2]/input")).sendKeys("SZAMPANI");
driver.findElement(By.xpath("html/body/font/table/tbody/tr[2]/td[2]/form/table/tbody/tr[2]/td[2]/input")).sendKeys("Liverpool1");
*/
