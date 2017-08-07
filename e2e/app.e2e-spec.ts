import { CotizadorPage } from './app.po';

describe('cotizador App', () => {
  let page: CotizadorPage;

  beforeEach(() => {
    page = new CotizadorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
