import { browser, element, by } from 'protractor';

export class JohnpapaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('naga-root h1')).getText();
  }
}
