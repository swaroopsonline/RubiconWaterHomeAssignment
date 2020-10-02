@BladeMeter 
Feature: Acceptance testing to download the Rubicon BladeMeter brochure
	In order to validate that 
 	the Brochure could be downloaded,
	we will do the acceptance testing
	
@BladeMeter-Positive 
Scenario: Validate the downloading of the BladeMeter Brochure
	Given I am logged on the HomePage of the RubiconWater "http://www.rubiconwater.com.au/#" 
	When I move to the Menu of the HomePage
		| Menu 					 |
		| Control Gates & Valves |
		| Flow Meters			 |
	And click on "BladeMeter" link 
	And on the resulting page click on the "Download brochure" link 
	Then on the resulting page, the Brochure should be displayed 
