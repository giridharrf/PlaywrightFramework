const { test, expect } = require("@playwright/test");
const { timeout } = require("../playwright.config");
// const { faker } = require("faker")

exports.LandingPge = class LandingPge {
  constructor(page) {
    this.page = page;
    this.supportDropdown = page.locator(
      'div[data-toggle="collapse"] i.fa-caret-down >>nth=0'
    );
    this.supportDropdownButton = page
      .locator('div[data-toggle="collapse"]')
      .first();
    this.liveSupportText = page.locator("div.select-dropdown>div>div").first();
    this.supportPhoneNumber = page.locator(
      "div.select-dropdown>>div>>div>>nth=1"
    );
    this.supportEmail = page.locator("div.select-dropdown>>div>>div>>nth=2");
    this.roundTripFlightOriginInputBox = page.locator(
      'div#round-trip input[placeholder="Origin"]'
    );
    this.pageLoader = page.locator("div.inProgressMiddle h4");
    this.loggedInUserSection = page.locator("button.logged.collapsed >>nth=1");
    this.agentName = page.locator("div.hotel-name-main");
    this.travelSwitch = page.locator("div.travelSwitch").first();
    this.personalTravelOption = page.locator(
      "div.m_hide>>div.travelSwitch>>button>>nth=0"
    );
    this.businessTravelOption = page.locator(
      "div.m_hide>>div.travelSwitch>>button>>nth=1"
    );
    this.languageSelected = page.locator(".flag>>nth=0");
    this.currencySelected = page.locator("span.currency-sign>>nth=0");
    this.viewProfile = page.locator("div.position-relative>>nth=6");
    this.signOutOption = page
      .locator("#profile_drop a")
      .filter({ hasText: "Sign Out" });
    this.chatLogo = page.locator('div[title="Chat"]');
    this.shoppingBag = page.locator('div[title="Bag"]');
    this.flightOption = page.getByRole("link", { name: "Flights" });
    this.hotelOption = page.getByRole("link", { name: "Hotels" });
    this.cruisesOption = page.getByRole("link", { name: "Cruises" });
    this.flightOptionSelected = page.locator("a.flight-link");
    this.roundTrip = page.locator("a").filter({ hasText: "Round Trip" });
    this.oneWayTrip = page.locator("a").filter({ hasText: "One Way" });
    this.multiCityTrip = page.locator("a").filter({ hasText: "Multi City" });
    this.roundTripWrapper = page.locator("ul.flighttab-nav a.show >>nth=0");
    this.addTraveller = page.getByRole("button", { name: "+ Add Traveler" });
    this.flightOriginInputBox = page.getByRole('textbox', { name: 'Origin' });
    this.flightDestinationInputBox = page.getByRole('textbox', { name: 'Destination' })
    this.flightDepartDate = page.locator('#origin_date')
    this.flightReturnDate = page.locator('#desti_date')
    this.numberOfTraveller = page.locator('#round-trip').getByRole('img').nth(3)

    this.multicity =  page.locator('a').filter({ hasText: 'Multi City' }).click();
    this.origin =  page.getByRole('textbox', { name: 'Origin' }).click();
    this.origintxt = page.getByText('Delhi Indira Gandhi Intl India (DEL-Delhi)').click();
    this.destination = page.getByRole('textbox', { name: 'Destination' })
    this.destinationtxt = page.locator('div').filter({ hasText: 'Mumbai India (BOM -Mumbai)' }).nth(4).click();
    this.deptdate = page.getByPlaceholder('mm/dd/yyyy').first().click();



    
  }

  async clickOnSupportDrodown(page) {
    await test.step("Click on support dropdown", async () => {
      await page.waitForSelector('div[data-toggle="collapse"]', {
        state: "visible",
        setTimeout: 45000,
      });
      await this.supportDropdownButton.click();
    });
  }

  async validateAndClickLoggedInUser(page) {
    await test.step("Logged in user is visible", async () => {
      await expect(this.loggedInUserSection).toBeVisible();
    });
    await test.step("Click in logged in user is dropdown", async () => {
      await this.loggedInUserSection.click();
    });
  }

  async waitTillPageLoad(page) {
    await test.step("Wait till page load completely", async () => {
      await this.page.waitForSelector("div.inProgressMiddle h4", {
        state: "hidden",
        setTimeout: 120000,
      });
    });
  }

  async validateLiveSupportMessage(page, liveSupportMessage) {
    await test.step("Validate Live Support Message", async () => {
      await expect(this.liveSupportText).toContainText(`${liveSupportMessage}`);
    });
  }

  async validateLiveSupportPhone(page, liveSupportPhone) {
    await test.step("Click on support dropdown", async () => {
      await expect(this.supportPhoneNumber).toContainText(
        `${liveSupportPhone}`
      );
    });
  }

  async validateLiveSupportEmail(page, liveSupportEmail) {
    await test.step("Click on support dropdown", async () => {
      await expect(this.supportEmail).toContainText(`${liveSupportEmail}`);
    });
  }

  async validatePersonalTravelOption(page) {
    await test.step("Click on personal travel option", async () => {
      await expect(this.personalTravelOption).toContainText("Personal");
    });
  }

  async validateBusinessTravelOption(page) {
    await test.step("Click on business travel option", async () => {
      await expect(this.businessTravelOption).toContainText("Business");
    });
  }

  async validateLanguageSelectOption(page) {
    await test.step("Validate language option is visible", async () => {
      await expect(this.languageSelected).toBeVisible();
    });
  }

  async validateCurrencySelectOption(page) {
    await test.step("Validate currency option is visible", async () => {
      await expect(this.currencySelected).toBeVisible();
    });
  }

  async validateViewProfileOption(page) {
    await test.step("Validate profile option is visible", async () => {
      await expect(this.viewProfile).toBeVisible();
    });
  }

  async validateSignOutOption(page) {
    await test.step("Validate sign out option is visible", async () => {
      await expect(this.signOutOption).toBeVisible();
    });
  }

  async validateChatOptionVisible(page) {
    await test.step("Validate chat option is visible", async () => {
      await expect(this.chatLogo).toBeVisible();
    });
  }

  async validateShoppingOptionVisible(page) {
    await test.step("Validate shopping option is visible", async () => {
      await expect(this.shoppingBag).toBeVisible();
    });
  }

  async validateFlightOptionVisible(page) {
    await test.step("Validate flight option is visible", async () => {
      await expect(this.flightOption).toBeVisible();
    });
  }

  async validateHotelOptionVisible(page) {
    await test.step("Validate hotel option is visible", async () => {
      await expect(this.hotelOption).toBeVisible();
    });
  }

  async validateCruiseOptionVisible(page) {
    await test.step("Validate cruise option is visible", async () => {
      await expect(this.cruisesOption).toBeVisible();
    });
  }

  async validateFlightOptionIsSelected(page) {
    await test.step("Validate flight option is selected by default", async () => {
      await expect(this.flightOptionSelected).toHaveClass(/active/);
    });
  }

  async validateFlightRoundTripIsSelected(page) {
    await test.step("Validate round trip option is selected by default", async () => {
      await expect(this.flightOptionSelected).toHaveClass(/active/);
    });
  }

  async validateRoundTripOptionVisible(page) {
    await test.step("Validate flight option is selected by default", async () => {
      await expect(this.roundTrip).toBeVisible();
    });
  }

  async validateOneWayOptionVisible(page) {
    await test.step("Validate flight option is selected by default", async () => {
      await expect(this.oneWayTrip).toBeVisible();
    });
  }

  async validateAddTravellerOptionVisible(page) {
    await test.step("Validate add traveller option is selected by default", async () => {
      await expect(this.addTraveller).toBeVisible();
    });
  }

  async validateFlightOriginInputOptionVisible(page) {
    await test.step("Validate Flight Origin Input Option Visible", async () => {
      await expect(this.flightOriginInputBox).toBeVisible();
    });
  }

  async validateFlightDestInputOptionVisible(page) {
    await test.step("Validate Flight Destination Input Option Visible", async () => {
      await expect(this.flightDestinationInputBox).toBeVisible();
    });
  }

  async validateFlightDepartDateOptionVisible(page) {
    await test.step("Validate Flight Departure Date is Visible", async () => {
      await expect(this.flightDepartDate).toBeVisible();
    });
  }

  async validateFlightReturnDateOptionVisible(page) {
    await test.step("Validate Flight Return Date Option is Visible", async () => {
      await expect(this.flightReturnDate).toBeVisible();
    });
  }

  async validateFlightNumberOfTravellerOptionVisible(page) {
    await test.step("Validate Flight Number of Traveller option Visible", async () => {
      await expect(this.numberOfTraveller).toBeVisible();
    });
  }

  async validateMultiCityOptionVisible (page) {
    await test.step("Validate multi city option Visible", async () => {
        await expect(this.multiCityTrip).toBeVisible();
    })
  }
};
