import HomePage from '../pages/HomePage';

describe('Check login window is present if user trying to open a game from th search', () => {
    let homePage;
    before('setup', () => {
        homePage = new HomePage();
        browser.navigateTo(browser.options.baseUrl);
    });

    ['Mayfair Roulette'].forEach((gameName: string) => it('Login pop-up is displayed', () => {
        homePage.clickSearchButton();
        homePage.inputQueryIntoSearchField(gameName);
        homePage.clickResultByName(gameName);
        homePage.checkLoginWindowIsDisplayed();
    }));
});
