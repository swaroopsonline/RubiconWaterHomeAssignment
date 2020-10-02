package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FarmConnectPageLocators {
	
	@FindBy(how=How.PARTIAL_LINK_TEXT, using="farmconnect-software")
	public WebElement FarmConnectSoftwareText;
	

}
