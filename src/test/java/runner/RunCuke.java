package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;



@CucumberOptions(features = { "src/test/resources/features/" },
		glue = { "steps" },
		tags = {"@Solar-panel"}, monochrome = true,
		plugin = {"html:target/RunCuke/cucumber-html-report", "json:target/RunCuke/cucumber.json",
		"junit:target/RunCuke/cucumber.xml",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:" }
		)

//AbstractTestNGCucumberTests runs each feature as separate test.
//AbstractTestNGCucumberTests class will use TestNG to execute the scenarios.
public class RunCuke extends AbstractTestNGCucumberTests{
	
	@BeforeClass
    public static void setup() {
        // Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy_hhmmss");
		Date curDate = new Date();
		String strDate = sdf.format(curDate);
		String fileName = System.getProperty("user.dir")+"\\target\\Extent_Reports\\" + strDate+".html";
		File newFile = new File(fileName);
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(newFile,false);
		//static report name
		//ExtentCucumberFormatter.initiateExtentCucumberFormatter(new File("F:\\cucumber-testing-master\\ExtenReports\\extentreports.html"),false);
        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
        ExtentCucumberFormatter.addSystemInfo("Browser version", "v85.0.4183.121");
        ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.8.1");

        // Also you can add system information using a hash map
        Map systemInfo = new HashMap();
        systemInfo.put("Cucumber version", "v1.2.3");
        systemInfo.put("Extent Cucumber Reporter version", "v1.1.0");
        ExtentCucumberFormatter.addSystemInfo(systemInfo);
	
	

}

}
