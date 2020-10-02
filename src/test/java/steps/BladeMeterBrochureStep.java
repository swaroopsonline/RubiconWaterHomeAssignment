package steps;

import java.util.List;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.actions.BladeMeterPageActions;
import pages.actions.BrochurePageActions;
import pages.actions.RubiconHomePageActions;
import utils.SeleniumDriver;

public class BladeMeterBrochureStep {

	RubiconHomePageActions rubiconHomePageActions = new RubiconHomePageActions();
	BladeMeterPageActions bladeMeterPageActions = new BladeMeterPageActions();
	BrochurePageActions brochurePageActions = new BrochurePageActions();

	@Given("I am logged on the HomePage of the RubiconWater {string}")
	public void i_am_logged_on_the_HomePage_of_the_RubiconWater(String URL) {
		SeleniumDriver.openPage(URL);
	}
	@When("I move to the Menu of the HomePage")
	public void i_move_to_the_Menu_of_the_HomePage(List<String> list) {
		String menu = list.get(2);
		System.out.println("Menu selected is " + menu);
		rubiconHomePageActions.moveToFlowMetersMenu();
	}
		

	@And("click the {string} link")
	public void click_the_link(String BladeMeter) {

		rubiconHomePageActions.moveBladeMeterMenu();
	}

	@When("on the resulting page click on the {string} link")
	public void on_the_resulting_page_click_on_the_link(String DownloadBrochure) {
		bladeMeterPageActions.moveToDownloadBrochure();
	}

	@Then("on the resulting page, the Brochure should be displayed")
	public void on_the_resulting_page_the_Brochure_should_be_displayed() {

		brochurePageActions.verifyBrochurePageTitle();
	}

}
