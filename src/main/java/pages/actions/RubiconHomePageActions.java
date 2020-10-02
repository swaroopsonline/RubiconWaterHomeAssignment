package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.RubiconHomePageLocators;
import utils.SeleniumDriver;

public class RubiconHomePageActions {

	RubiconHomePageLocators rubiconHomePageLocators = null;

	public RubiconHomePageActions() {

		this.rubiconHomePageLocators = new RubiconHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), rubiconHomePageLocators);
	}

	public void moveToControlGatesandValvesMenu() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(rubiconHomePageLocators.ControlGatesValvesLink).perform();
	}

	public void moveToFlumeGateMenu() {
		//moveToControlGatesandValvesMenu
		rubiconHomePageLocators.FlumeGateLink.click();
	}
	
	public void moveToFlowMetersMenu() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(rubiconHomePageLocators.FlowMetersLink).perform();

	}
	
	public void moveBladeMeterMenu() {
		//moveToFlowMetersMenu
		rubiconHomePageLocators.BladeMeterLink.click();
	}
	
	public void moveSearchBarMenu() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(rubiconHomePageLocators.SearchBar).sendKeys("FarmConnect Software");

	}
	
	public void clickOnSearchBarMenu() {
		//moveSearchBarMenu
		rubiconHomePageLocators.SearchBarClick.click();
	}

}
