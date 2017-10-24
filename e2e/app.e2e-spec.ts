import { PetzPage } from './app.po';

describe('petz App', () => {
  let page: PetzPage;

  beforeEach(() => {
    page = new PetzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
