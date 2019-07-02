"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const Wait_1 = require("../utils/Wait");
const HeaderBlock_1 = require("../blocks/HeaderBlock");
const locators = require('../selectors/Common.json');
class HomePage {
    get blockHeader() {
        return new HeaderBlock_1.default();
    }
    clickSearchButton() {
        this.blockHeader.searchButton().click();
    }
    inputQueryIntoSearchField(query) {
        this.blockHeader.inputSearchField().setValue(query);
    }
    clickResultByName(name) {
        for (const result of this.blockHeader.searchResults()) {
            if (result.getTitle() === name) {
                result.getElement().click();
                break;
            }
        }
    }
    checkLoginWindowIsDisplayed() {
        Wait_1.default.waitElementToBeDisplayed($(locators.loginPopUp));
        assert($(locators.loginPopUp).isDisplayed());
    }
}
exports.default = HomePage;
