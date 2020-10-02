@FarmConnectSoftware
Feature: Acceptance testing to see the details about "Crop Monitoring" on searching for "Farm Connect Software"
	In order to verify that 
 	the details of Crop Monitoring could be obtained
	we will do the acceptance testing
	
@FarmConnectSoftware-Positive 
Scenario: Verifying the existence of the Crop Monitoring details
	Given I am on the HomePage of the RubiconWater "http://www.rubiconwater.com.au/#" 
	When I move to the "Search Bar" and search for "FarmConnect Software"	
	And I click on the search Bar	
	Then on the resulting page, the details of the Crop Monitoring should be displayed