package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.FlumGatePageLocators;
import utils.SeleniumDriver;

public class FlumGatePageActions {

	FlumGatePageLocators flumGatePageLocators = null;

	public FlumGatePageActions() {

		this.flumGatePageLocators = new FlumGatePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), flumGatePageLocators);
	}

	public void moveToSpecificationsTab() {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(flumGatePageLocators.SpecificationsLink).perform();
		//action.moveToElement(FlumGatePageLocators.).perform();
	}
	
	public void findSolarPanelType() {
		
		String sp = flumGatePageLocators.SolarPanel.getText();
		//System.out.println(actualText);
		
		String panelType = flumGatePageLocators.SolarPanelType.getText();
		System.out.println(sp+ " is " +panelType);
	}
	
	
}
