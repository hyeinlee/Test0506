package com.cucumber.googlesearch.CucumberGooglesearrch;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty"}, features ={ "src/test/resource"},
format = {"json:target/json/cucumber.json", "html:target/html/cucumber.html"})
//@CucumberOptions(features = "sec/test/resource")

public class RunCukesTest {

}
