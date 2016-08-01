describe('$.js', () => {

  it('Consultando o tag body', () => {

    Rex(({ $ }) =>
      expect($('body')).toBe(document.body));

  });

  afterEach(window.onload);

});