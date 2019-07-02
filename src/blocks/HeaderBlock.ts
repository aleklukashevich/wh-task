import Wait from '../utils/Wait';

const locators = require('../selectors/HeaderBlock.json');
export default class HeaderBlock {

    public searchButton() : WebdriverIO.Element {
        return $(locators.searchButton);
    }
    public inputSearchField(): WebdriverIO.Element {
        return $(locators.searchTextField);
    }
    public searchResults(): SearchResult[] {
        Wait.waitElementToBeDisplayed($(locators.searchResult));
        const results: SearchResult[] = [];
        for (const res of $$(locators.searchResultsRows)) {
            results.push(new SearchResult(res, res.$('span').getText()));
        }
        return results;
    }
}

export class SearchResult {
    private element: WebdriverIO.Element;
    private title: string;
    constructor(element: WebdriverIO.Element, title: string) {
        this.element = element;
        this.title = title;
    }
    getElement(): WebdriverIO.Element {
        return this.element;
    }

    getTitle(): string {
        return this.title;
    }
}
