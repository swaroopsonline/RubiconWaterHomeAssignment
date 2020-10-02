package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BladeMeterPageLocators {
	
	@FindBy(how=How.LINK_TEXT, using="Download brochure")
	public WebElement DownloadBrochureLink;
	
	

}
