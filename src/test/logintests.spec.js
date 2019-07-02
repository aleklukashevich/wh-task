"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pages/HomePage");
describe('Check login window is present if user trying to open a game from th search', () => {
    let homePage;
    before('setup', () => {
        homePage = new HomePage_1.default();
        browser.navigateTo(browser.options.baseUrl);
    });
    ['Mayfair Roulette'].forEach((gameName) => it('Login pop-up is displayed', () => {
        homePage.clickSearchButton();
        homePage.inputQueryIntoSearchField(gameName);
        homePage.clickResultByName(gameName);
        homePage.checkLoginWindowIsDisplayed();
    }));
});
