$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SolarPanel.feature");
formatter.feature({
  "name": "Acceptance testing to validate the type of Solar Panel by looking at the Flumgate specifications",
  "description": "\tIn order to validate that \n \tthe Flumgate specifications are working fine\n\twe will do the acceptance testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Solar-panel"
    }
  ]
});
formatter.scenario({
  "name": "Validate Specifications tab on Flumgate page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Solar-panel"
    },
    {
      "name": "@Solar-panel-Positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the HomePage of the RubiconWater \"http://www.rubiconwater.com.au/#\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SolarPanelValidationStep.i_am_on_the_HomePage_of_the_RubiconWater(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to the Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ]
    },
    {
      "cells": [
        "Control Gates \u0026 Valves"
      ]
    },
    {
      "cells": [
        "Flow Meters"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SolarPanelValidationStep.i_move_to_the_Menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"FlumGate\" link",
  "keyword": "And "
});
formatter.match({
  "location": "SolarPanelValidationStep.click_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on the resulting page click on the \"Specifications\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "SolarPanelValidationStep.on_the_resulting_page_click_on_the_tab(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Unable to convert: {actions\u003d[org.openqa.selenium.interactions.Sequence@6d64b553]}\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convert(BeanToJsonConverter.java:79)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:58)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:228)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:118)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:667)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\r\n\tat pages.actions.FlumGatePageActions.moveToSpecificationsTab(FlumGatePageActions.java:22)\r\n\tat steps.SolarPanelValidationStep.on_the_resulting_page_click_on_the_tab(SolarPanelValidationStep.java:42)\r\n\tat ✽.on the resulting page click on the \"Specifications\" tab(file:src/test/resources/features/SolarPanel.feature:15)\r\nCaused by: org.openqa.selenium.WebDriverException: Unable to convert: {actions\u003d[org.openqa.selenium.interactions.Sequence@6d64b553]}\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:98)\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convert(BeanToJsonConverter.java:76)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:58)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:228)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:118)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:667)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\r\n\tat pages.actions.FlumGatePageActions.moveToSpecificationsTab(FlumGatePageActions.java:22)\r\n\tat steps.SolarPanelValidationStep.on_the_resulting_page_click_on_the_tab(SolarPanelValidationStep.java:42)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: org.openqa.selenium.WebDriverException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SMITAPC\u0027, ip: \u0027192.168.88.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:196)\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:148)\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:136)\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:96)\r\n\t... 53 more\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.json.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:179)\r\n\t... 56 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Specifications\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SMITAPC\u0027, ip: \u0027192.168.88.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Smita\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59896}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7b1ac15212878f8dec6d3b4bc5ba15e2\n*** Element info: {Using\u003dlink text, value\u003dSpecifications}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:203)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:154)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should be able to find the \"Solar Panel\" type",
  "keyword": "Then "
});
formatter.match({
  "location": "SolarPanelValidationStep.i_should_be_able_to_find_the_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});