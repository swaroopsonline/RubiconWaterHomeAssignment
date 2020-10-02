package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FlumGatePageLocators {

	@FindBy(how=How.LINK_TEXT, using="Specifications")
	public WebElement SpecificationsLink;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"tab-specifictaions\"]/table/tbody/tr[27]/td[1]")
	public WebElement SolarPanel;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"tab-specifictaions\"]/table/tbody/tr[27]/td[2]")
	public WebElement SolarPanelType;
	
	
	
}
