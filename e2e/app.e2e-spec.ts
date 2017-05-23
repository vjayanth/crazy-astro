import { CrazyAstroPage } from './app.po';

describe('crazy-astro App', () => {
  let page: CrazyAstroPage;

  beforeEach(() => {
    page = new CrazyAstroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
