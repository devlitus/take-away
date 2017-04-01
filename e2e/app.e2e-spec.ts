import { TakeAwayPage } from './app.po';

describe('take-away App', () => {
  let page: TakeAwayPage;

  beforeEach(() => {
    page = new TakeAwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
