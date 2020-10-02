package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class RubiconHomePageLocators {
	
	@FindBy(how=How.XPATH, using="//*[@id=\"main\"]/ul/li[3]/a/span")
	public WebElement ControlGatesValvesLink;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"main\"]/ul/li[3]/div[1]/div[1]/div/ul/li[2]/a")
	public WebElement FlumeGateLink;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"main\"]/ul/li[4]/a/span")
	public WebElement FlowMetersLink;
	
	@FindBy(how=How.LINK_TEXT, using="BladeMeter")
	public WebElement BladeMeterLink;
	
	@FindBy(how=How.CLASS_NAME, using="search-text placeholder")
	public WebElement SearchBar;
	
	@FindBy(how=How.NAME, using="search")
	public WebElement SearchBarClick;

}
