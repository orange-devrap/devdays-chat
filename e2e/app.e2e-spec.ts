import { DevdaysChatPage } from './app.po';

describe('devdays-chat App', function() {
  let page: DevdaysChatPage;

  beforeEach(() => {
    page = new DevdaysChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
