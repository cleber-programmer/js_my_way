describe('always.js', () => {

  it('Definino um valor na primeira execucao de retornar o mesmo valor a partir da segunda execucao', () => {

    Rex(({ always }) =>
      expect(always('cleber.programmer')()).toBe('cleber.programmer'));

	});

  afterEach(window.onload);

});