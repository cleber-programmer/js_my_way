describe('$.js', () => {

  it('Consultando o tag body', () => {

    Rex(({ $ }) =>
      expect($('body')).toBe(document.body));

  });

  it('Consultando um tag que nao exista no body', () => {

    Rex(({ $ }) =>
      expect($('xpto')).toBe(null));

  });

  it('Passando nenhum parametro', () => {

    Rex(({ $ }) =>
      expect($()).toBe(null));

  });

  afterEach(window.onload);

});