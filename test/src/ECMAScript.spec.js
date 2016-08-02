describe('ECMAScript', () => {

  it('Teste da funcao charAt', () => {

    Rex(({ charAt }) => {
      expect(charAt('Brave new world', -1)).toEqual('');
      expect(charAt('Brave new world', 0)).toEqual('B');
      expect(charAt('Brave new world', 999)).toEqual('');
    });

  });

  afterEach(window.onload);

});