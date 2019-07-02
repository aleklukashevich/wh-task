import * as assert from 'assert';
import Wait from '../utils/Wait';
import HeaderBlock from '../blocks/HeaderBlock';
const locators = require('../selectors/Common.json');

export default class HomePage {
    public get blockHeader(): HeaderBlock {
        return new HeaderBlock();
    }
    public clickSearchButton() : void {
        this.blockHeader.searchButton().click();
    }
    public inputQueryIntoSearchField(query: string): void {
        this.blockHeader.inputSearchField().setValue(query);
    }
    public clickResultByName(name: string): void {
        for (const result of this.blockHeader.searchResults()) {
            if (result.getTitle() === name) {
                result.getElement().click();
                break;
            }
        }
    }
    public checkLoginWindowIsDisplayed(): void {
        Wait.waitElementToBeDisplayed($(locators.loginPopUp));
        assert($(locators.loginPopUp).isDisplayed());
    }
}
