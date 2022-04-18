/* eslint-disable no-unused-vars */
import * as webScience from "../../../src/webScience.js";

function pageVisitStartListener(pageVisit) {
    console.debug("Page visit start:", pageVisit);
}

function pageVisitStopListener(pageVisit) {
    console.debug("Page visit stop:", pageVisit);
}

function pageDataListener(pageData) {
    console.debug("page navigation data:", pageData);
}

webScience.pageManager.onPageVisitStart.addListener(pageVisitStartListener);
webScience.pageManager.onPageVisitStop.addListener(pageVisitStopListener);

webScience.pageNavigation.onPageData.addListener(pageDataListener, { matchPatterns: ["<all_urls>"] });