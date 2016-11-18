import { MbspaPage } from './app.po';

describe('mbspa App', function() {
  let page: MbspaPage;

  beforeEach(() => {
    page = new MbspaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
