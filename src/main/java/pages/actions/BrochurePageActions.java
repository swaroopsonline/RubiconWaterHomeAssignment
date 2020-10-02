package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import utils.SeleniumDriver;

public class BrochurePageActions {

	public void verifyBrochurePageTitle() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		//action.moveToElement(bladeMeterPageLocators.DownloadBrochureLink).click();
		
		String actualTitle = SeleniumDriver.getDriver().getTitle();
		String expectedTitle = "719_Rubicon Data Sheet BladeMeter (English ANZ).pdf" ;	
		Assert.assertEquals(actualTitle, expectedTitle);
		
	}

}
