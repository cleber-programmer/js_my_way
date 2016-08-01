describe('UUID.js', () => {

  it('Modulo UUID a cada execucao deve retornar um valor diferente e unico', () => {

    Rex(({ UUID }) =>
      expect(UUID()).not.toEqual(UUID()));

  });

  afterEach(window.onload);

});