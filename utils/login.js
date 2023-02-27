const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../page/loginPage")

export async function loginToApplication(page, url, userName, password) {
  const loginPage = new LoginPage(page);
  await test.step("Open the URL", async () => {
    await loginPage.navigateToHomepage(page, url);
  });
  await test.step("Wait until page loads", async () => {
    await loginPage.waitForLoginPageVisible(page);
  });
  await test.step("Enter Username", async () => {
    await loginPage.enterUsername(page, userName);
  });
  await test.step("Enter Password", async () => {
    await loginPage.enterPassword(page, password);
  });
  await test.step("Click on login button", async () => {
    await loginPage.clickOnLoginButton(page);
  });
}
