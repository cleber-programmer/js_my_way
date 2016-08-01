describe('apply.js', () => {

  it('Executando o modulo add com o apply', () => {

    Rex(({ add, apply }) =>
      expect(apply(add, [1, 2])).toBe(3));

  });

  afterEach(window.onload);

});