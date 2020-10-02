package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.BladeMeterPageLocators;
import utils.SeleniumDriver;

public class BladeMeterPageActions {
	
	BladeMeterPageLocators bladeMeterPageLocators = null;
		
	
	public BladeMeterPageActions() {
		
		this.bladeMeterPageLocators = new BladeMeterPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), bladeMeterPageLocators);
	}
	
	public void moveToDownloadBrochure() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(bladeMeterPageLocators.DownloadBrochureLink).click();
	}
	
	
}
