import { LenaBlogPage } from './app.po';

describe('lena-blog App', function() {
  let page: LenaBlogPage;

  beforeEach(() => {
    page = new LenaBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
