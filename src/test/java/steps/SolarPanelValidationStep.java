package steps;

import java.util.List;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.actions.FlumGatePageActions;
import pages.actions.RubiconHomePageActions;
import utils.SeleniumDriver;

public class SolarPanelValidationStep {
	
	RubiconHomePageActions rubiconHomePageActions = new RubiconHomePageActions();
	FlumGatePageActions flumGatePageActions = new FlumGatePageActions();
	
	@Given("I am on the HomePage of the RubiconWater {string}")
	public void i_am_on_the_HomePage_of_the_RubiconWater(String URL) {
	    
		SeleniumDriver.openPage(URL);
	}

	@When("I move to the Menu")
	public void i_move_to_the_Menu(List<String> list) {
	    
		String menu = list.get(1);
		System.out.println("Menu selected is " +menu);
		rubiconHomePageActions.moveToControlGatesandValvesMenu();
		
	}

	@And("click on {string} link")
	public void click_on_link(String FlumGate) {
	    
		rubiconHomePageActions.moveToFlumeGateMenu();
	}

	@And("on the resulting page click on the {string} tab")
	public void on_the_resulting_page_click_on_the_tab(String Specifications) {
	    
		flumGatePageActions.moveToSpecificationsTab();
	}

	@Then("I should be able to find the {string} type")
	public void i_should_be_able_to_find_the_type(String SolarPanel) {
	    
		flumGatePageActions.findSolarPanelType();
	}

	
}
