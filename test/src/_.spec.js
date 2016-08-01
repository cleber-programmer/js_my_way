describe('_.js', () => {

  it('Modulo _ esta definido com seu valor unico', () => {

    Rex(({ _ }) =>
      expect(_).toBeDefined());

  });

  afterEach(window.onload);

});