import { Ng2TruncateDemoPage } from './app.po';

describe('ng2-truncate-demo App', function() {
  let page: Ng2TruncateDemoPage;

  beforeEach(() => {
    page = new Ng2TruncateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
