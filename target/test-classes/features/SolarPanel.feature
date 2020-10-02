@Solar-panel 
Feature: Acceptance testing to validate the type of Solar Panel by looking at the Flumgate specifications 
	In order to validate that 
 	the Flumgate specifications are working fine
	we will do the acceptance testing
 
@Solar-panel-Positive 
Scenario: Validate Specifications tab on Flumgate page 
	Given I am on the HomePage of the RubiconWater "http://www.rubiconwater.com.au/#" 
	When I move to the Menu 
		| Menu 					 |
		| Control Gates & Valves |
		| Flow Meters			 |
	And click on "FlumGate" link 
	And on the resulting page click on the "Specifications" tab 
	Then I should be able to find the "Solar Panel" type 
  