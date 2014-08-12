package com.qtpselenium.app.salesforce.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebConnector {
	// initialize properties file
	// logging
	// selenium/webdriver layer -  selenium commands
	
	Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
	Properties OR = null;
	Properties CONFIG=null;
	WebDriver driver =null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	static WebConnector w;
	
	private WebConnector(){
		
		if(OR==null){
			try{
				// initialize OR
				OR = new Properties();
				FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\config\\OR.properties");
				OR.load(fs);

				// initialize CONFIG to corresponding env
				CONFIG= new Properties();
				fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qtpselenium\\app\\salesforce\\config\\"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
				
				System.out.println(OR.getProperty("loginusername"));
				System.out.println(CONFIG.getProperty("loginURL"));
				
				
			}catch(Exception e){
				System.out.println("Error on intializing properties files");
			}
			
			
		}
		
	}
	
	/// ****************Application Independent functions************************ ///

	// opening the browser
	public void openBrowser(String browserType){
		log("Opening browser "+browserType);
		if(browserType.equals("Mozilla") && mozilla==null){
			driver = new FirefoxDriver();
			mozilla=driver;
		}else if(browserType.equals("Mozilla") && mozilla!=null){
			driver=mozilla;
		}else if(browserType.equals("Chrome") && chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Chrome//chromedriver.exe");
			driver= new ChromeDriver();
			chrome=driver;
		}else if(browserType.equals("Chrome") && chrome==null){
			driver=chrome;
		}else if(browserType.equals("IE") && ie==null){
		    System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"//InternetExplorer//IEDriverServer.exe");
		    driver= new InternetExplorerDriver();
		    ie=driver;
	    }else if(browserType.equals("IE") && ie==null){
		    driver=ie;
	    }
		
		// max
		driver.manage().window().maximize();  
		// implicit wait
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	    }
	// navigates to a URL
	public void navigate(String URL){
		log("Naviating to "+CONFIG.getProperty(URL));
		driver.get(CONFIG.getProperty(URL));
	}
	// clicking on any object
	public void click(String objectName){
		log("Clicking on " + objectName);
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
		
	}
	
	public void click1(String objectName){
		log("Clicking on " + objectName);
		try{
		driver.switchTo().defaultContent();
		driver.switchTo().frame(0);
		driver.switchTo().frame(0);
		
		//List<WebElement> iframes=driver.findElements(By.tagName("iframe"));	
		//System.out.println(iframes.size());
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
		}catch(Exception e){
			System.out.println("Error");
			return;		
	}
		//return;
	}
	
	
	public void type(String text, String objectName){
		log("Typing in " + objectName);
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
	}
	
	public void select(String text, String objectName){
		log("Selecting from "+ objectName);
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
	}
	
	public boolean isElementPresent(String objectName){
		log("Checking object presence "+ objectName);
		int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
		if(count==0)
			return false;
		else
			return true;
	}
	
	public int getWindowIds() throws InterruptedException{
		Thread.sleep(3000L);
		Set<String> winIds = driver.getWindowHandles();
		Iterator<String> it= winIds.iterator();
		System.out.println(winIds.size());
		//System.out.println(it.next());
	    return winIds.size();
	}
	/*
	public void Tabs(String objectName){
		log("Checking the tabs"+ objectName);
		//driver=new InternetExplorerDriver();
		Set<String> winIds = driver.getWindowHandles();
		Iterator<String> it= winIds.iterator();
		winIds = driver.getWindowHandles();
		it= winIds.iterator();
		String mainWindowId = it.next();
		String tabWindId = it.next();
		driver.switchTo().window(objectName);
		driver.findElement(By.xpath("html/body/font/table/tbody/tr[2]/td[2]/form/table/tbody/tr[1]/td[2]/input")).sendKeys("SZAMPANI");
		driver.findElement(By.xpath("html/body/font/table/tbody/tr[2]/td[2]/form/table/tbody/tr[2]/td[2]/input")).sendKeys("Liverpool1");
		
		
	}
*/
	public void capturescreenshot(String filename) throws IOException{
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	    FileUtils.copyFile(scrFile, new File(System.getProperty("user.dir")+"\\screenshots\\"+filename+".jpg"));
	}
   /*
    public void isElementPresent(String objectName){
	    driver.get("https://cs3.salesforce.com/home/home.jsp");
	    Set<String> winIds = driver.getWindowHandles();
	    Iterator<String> it= winIds.iterator();
	    driver.findElement(By.xpath("//form[@id='j_id0:j_id2']/div[1]/div[1]/a")).sendKeys();
	    winIds = driver.getWindowHandles();
	    it= winIds.iterator();
	    String mainWindowId = it.next();
	    String tabWindowId = it.next();
	    driver.switchTo().window(tabWindowId);
	    driver.findElement(By.xpath("//form[@id='j_id0:j_id2']/div[1]/div[1]/a")).sendKeys();
	    driver.switchTo().window(mainWindowId);
}
*/

/*
	public void takeScreenshot(String action) throws IOException {
		//take a screenshot
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		// Now you can do whatever you need to do with it, for example copy somewhere
		FileUtils.copyFile(scrFile, new File("target/" + System.currentTimeMillis() + action + ".jpg"));  
	}
*/
	
	
	/// ****************Application dependent functions************************ ///
	
	public boolean isLoggedIn(){
		
		if(isElementPresent("searchText"))
			return true;
		else
			return false;
	}
		
	public void doDefaultLogin(){
		navigate("loginURL");
		type(CONFIG.getProperty("defaultUsername"), "loginusername");
		type(CONFIG.getProperty("defaultPassword"), "loginpassword");
		click("loginButton");
	}
	
	
	/********Singleton**********/
	public static WebConnector getInstance(){
		if(w==null)
			w= new WebConnector();
		
		return w;
	}
	
	/**************Logging***************/
	public void log(String msg){
		APPLICATION_LOGS.debug(msg);
	
	}
	
	
	
	
	
	
	
	
}
