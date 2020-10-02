package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.FarmConnectPageLocators;
import pages.locators.RubiconHomePageLocators;
import utils.SeleniumDriver;

public class FarmConnectPageActions {
	
	RubiconHomePageLocators rubiconHomePageLocators = new RubiconHomePageLocators() ;
	FarmConnectPageLocators farmConnectPageLocators = null;
	
	public String searchBarInsert = "Farm Connect Software";
	
	public FarmConnectPageActions() {
		
		this.farmConnectPageLocators = new FarmConnectPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), farmConnectPageLocators);
	}
	
	public void moveToSearchBar() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(rubiconHomePageLocators.SearchBar).sendKeys(searchBarInsert).click();
		
	}
	
	
	public void moveToSeeCropMonitoringDetails() {
		
		String FarmConnectSoftware = farmConnectPageLocators.FarmConnectSoftwareText.getText();
		System.out.println(FarmConnectSoftware+ "You've the Crop monitoring details");
	}
	
	

}
