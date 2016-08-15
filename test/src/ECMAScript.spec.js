describe('ECMAScript', () => {

  it('Teste da funcao charAt', () => {

    Rex(({ charAt }) => {
      expect(charAt('Brave new world', -1)).toBe('');
      expect(charAt('Brave new world', 0)).toBe('B');
      expect(charAt('Brave new world', 1)).toBe('r');
      expect(charAt('Brave new world', 2)).toBe('a');
      expect(charAt('Brave new world', 3)).toBe('v');
      expect(charAt('Brave new world', 4)).toBe('e');
      expect(charAt('Brave new world', 999)).toBe('');
    });

  });

  it('Teste da funcao charCodeAt', () => {

    Rex(({ charCodeAt }) => {
      expect(charCodeAt('ABC', -1)).toEqual(NaN);
      expect(charCodeAt('ABC', 0)).toBe(65);
      expect(charCodeAt('ABC', 1)).toBe(66);
      expect(charCodeAt('ABC', 2)).toBe(67);
      expect(charCodeAt('ABC', 999)).toEqual(NaN);
    });

  });

  it('Teste da funcao codePointAt', () => {

    Rex(({ codePointAt }) => {
      expect(codePointAt('ABC', -1)).toEqual(undefined);
      expect(codePointAt('ABC', 0)).toBe(65);
      expect(codePointAt('ABC', 1)).toBe(66);
      expect(codePointAt('ABC', 2)).toBe(67);
      expect(codePointAt('ABC', 999)).toEqual(undefined);
    });

  });

  afterEach(window.onload);

});
