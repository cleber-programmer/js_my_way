describe('assign.js', () => {

  it('Extendendo objeto b ao objeto a', () => {

    Rex(({ assign }) =>
      expect(assign({}, { a: 1 })).toEqual({ a: 1 }));

  });

  afterEach(window.onload);

});