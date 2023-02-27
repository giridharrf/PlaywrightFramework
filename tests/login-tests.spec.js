const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Page/loginPage");
const { LandingPge } = require("../Page/landingPage");
const { enviroment } = require("../config");
const { loginToApplication } = require("../utils/login");
import loginPageDefaultText from "../payload/loginPage.json";
import supportMessages from "../payload/supportPopup.json";

test.describe("LoginPage Validation", () => {
  test("Mondee_Login_1 Mondee_Launching of website", async ({ page }) => {
    // loginpage
    const loginPage = new LoginPage(page);
    await test.step("Open the URL", async () => {
      await loginPage.navigateToHomepage(page, enviroment.url);
    });
    await loginPage.waitForLoginPageVisible(page);
    await test.step("Validate URL", async () => {
      await expect(page).toHaveURL(/app.mondee.com/);
    });
    await test.step("Validate text below image", async () => {
      await loginPage.validateText(page, loginPageDefaultText.textBelowImage);
    });
    await test.step("Verify login text", async () => {
      await loginPage.validateLoginText(page);
    });
    await test.step("Verify Email label text", async () => {
      await loginPage.validateEmailLabelText(page);
    });
    await test.step("Verify Password Label text", async () => {
      await loginPage.validatePasswordLabelText(page);
    });
    await test.step("Validate privacy policy text", async () => {
      await loginPage.validatePrivacyPolicyText(
        page,
        loginPageDefaultText.privacyPolicyText
      );
    });
    await test.step("Validate forgot password text", async () => {
      await loginPage.validateForgotPasswordText(page);
    });
    await test.step("Validate google login text", async () => {
      await loginPage.validateGoogleLoginOption(page);
    });
    await test.step("Validate signup text", async () => {
      await loginPage.validateSignUpOption(
        page,
        loginPageDefaultText.signupText
      );
    });
  });

  test("Mondee_Login_2 Mondee_Login to Mondee web", async ({ page }) => {
    await loginToApplication(
      page,
      enviroment.url,
      enviroment.agentUserName,
      enviroment.agentPassword
    );
    const landingPage = new LandingPge(page);
    await landingPage.waitTillPageLoad(page);
    await landingPage.clickOnSupportDrodown(page);
    await landingPage.validateLiveSupportEmail(
      page,
      supportMessages.supportEmail
    );
    await landingPage.validateLiveSupportMessage(
      page,
      supportMessages.liveSupportText
    );
    await landingPage.validateLiveSupportPhone(
      page,
      supportMessages.supportPhoneNumber
    );
    await landingPage.validateAndClickLoggedInUser(page);
    await landingPage.validateBusinessTravelOption(page);
    await landingPage.validatePersonalTravelOption(page);
    await landingPage.validateLanguageSelectOption(page);
    await landingPage.validateSignOutOption(page);
    await landingPage.validateViewProfileOption(page);
    await landingPage.validateCurrencySelectOption(page);
    await landingPage.clickOnSupportDrodown(page);
    await landingPage.validateChatOptionVisible(page);
    await landingPage.validateShoppingOptionVisible(page);
    await landingPage.validateFlightOptionVisible(page);
    await landingPage.validateHotelOptionVisible(page);
    await landingPage.validateCruiseOptionVisible(page);
    await landingPage.validateFlightOptionIsSelected(page);
    await landingPage.validateFlightRoundTripIsSelected(page);
    await landingPage.validateRoundTripOptionVisible(page);
    await landingPage.validateOneWayOptionVisible(page);
    await landingPage.validateMultiCityOptionVisible(page);
    await landingPage.validateAddTravellerOptionVisible(page);
    await landingPage.validateFlightOriginInputOptionVisible(page);
    await landingPage.validateFlightDestInputOptionVisible(page);
    await landingPage.validateFlightDepartDateOptionVisible(page);
    await landingPage.validateFlightReturnDateOptionVisible(page);
    await landingPage.validateFlightNumberOfTravellerOptionVisible(page);
  });
});
