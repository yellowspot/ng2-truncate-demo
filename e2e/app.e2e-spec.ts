import { Ng2TruncateDemoPage } from './app.po';

describe('migration-project App', function() {
  let page: Ng2TruncateDemoPage;

  beforeEach(() => {
    page = new Ng2TruncateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
