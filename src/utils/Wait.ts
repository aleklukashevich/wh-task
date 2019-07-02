export default class Wait {
    public static waitElementToBeDisplayed(element: WebdriverIO.Element): void {
        browser.waitUntil(() => { return element.isDisplayed() === true; },
                          5000, 'Element is not present in 5 sec');
    }
}
