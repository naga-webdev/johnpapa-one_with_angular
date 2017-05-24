import { JohnpapaPage } from './app.po';

describe('johnpapa App', () => {
  let page: JohnpapaPage;

  beforeEach(() => {
    page = new JohnpapaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('naga works!');
  });
});
