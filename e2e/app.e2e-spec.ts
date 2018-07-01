import { SequenceCalculatorPage } from './app.po';

describe('sequence-calculator App', function() {
  let page: SequenceCalculatorPage;

  beforeEach(() => {
    page = new SequenceCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
