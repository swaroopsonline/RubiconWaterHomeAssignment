package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.actions.FarmConnectPageActions;
import utils.SeleniumDriver;

public class FarmConnectCropMonitoringStep {
	
	FarmConnectPageActions farmConnectPageActions = new FarmConnectPageActions();
	
	@Given("I am on the HomePage {string}")
	public void I_am_on_the_HomePage(String URL) {

		SeleniumDriver.openPage(URL);
	}

	
	@When("I move to the {string} and search for {string}")
	public void i_move_to_the_and_search_for(String searchBar, String farmConnectSoftware) {
		
		farmConnectPageActions.moveToSearchBar();		
	    
	}

	
	@Then("on the resulting page, the details of the Crop Monitoring should be displayed")
	public void on_the_resulting_page_the_details_of_the_Crop_Monitoring_should_be_displayed() {
	    
		farmConnectPageActions.moveToSeeCropMonitoringDetails();
	}


}
