"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wait_1 = require("../utils/Wait");
const locators = require('../selectors/HeaderBlock.json');
class HeaderBlock {
    searchButton() {
        return $(locators.searchButton);
    }
    inputSearchField() {
        return $(locators.searchTextField);
    }
    searchResults() {
        Wait_1.default.waitElementToBeDisplayed($(locators.searchResult));
        const results = [];
        for (const res of $$(locators.searchResultsRows)) {
            results.push(new SearchResult(res, res.$('span').getText()));
        }
        return results;
    }
}
exports.default = HeaderBlock;
class SearchResult {
    constructor(element, title) {
        this.element = element;
        this.title = title;
    }
    getElement() {
        return this.element;
    }
    getTitle() {
        return this.title;
    }
}
exports.SearchResult = SearchResult;
