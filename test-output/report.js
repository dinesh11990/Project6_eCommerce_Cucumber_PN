$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./features/Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 2365898300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_Opens_URL(String)"
});
formatter.result({
  "duration": 1646865800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 246179000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6837138800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 28304800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Search Customer by Name",
  "description": "",
  "id": "customers;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Enter customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter customer LastName",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User should found Name in the search table",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3084667500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 5834306100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_FirstName()"
});
formatter.result({
  "duration": 605322300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_LastName()"
});
formatter.result({
  "duration": 219535300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3132065800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_search_table()"
});
formatter.result({
  "duration": 259193500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 754152800,
  "status": "passed"
});
});