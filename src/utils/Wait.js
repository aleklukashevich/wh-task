"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wait {
    static waitElementToBeDisplayed(element) {
        browser.waitUntil(() => { return element.isDisplayed() === true; }, 5000, 'Element is not present in 5 sec');
    }
}
exports.default = Wait;
