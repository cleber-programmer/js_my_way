describe('ECMAScript', () => {

  it('Devolve o carccter definido a partir de uma string', () => {

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

  it('Retorna um inteiro entre 0 e 65535 que representa a unidade de UTF-16 codigo no indice fornecido', () => {

    Rex(({ charCodeAt }) => {
      expect(charCodeAt('ABC', -1)).toEqual(NaN);
      expect(charCodeAt('ABC', 0)).toBe(65);
      expect(charCodeAt('ABC', 1)).toBe(66);
      expect(charCodeAt('ABC', 2)).toBe(67);
      expect(charCodeAt('ABC', 999)).toEqual(NaN);
    });

  });

  it('Retorna um inteiro nao negativo que é o valor do ponto de codigo Unicode', () => {

    Rex(({ codePointAt }) => {
      expect(codePointAt('ABC', -1)).toBe(undefined);
      expect(codePointAt('ABC', 0)).toBe(65);
      expect(codePointAt('ABC', 1)).toBe(66);
      expect(codePointAt('ABC', 2)).toBe(67);
      expect(codePointAt('ABC', 999)).toBe(undefined);
    });

  });

  it('Combina o texto de duas ou mais strings e retorna uma nova string', (done) => {

    Rex(({ concat }) => {
      expect(concat('A')).toBe('A');
      expect(concat('A', 'B')).toBe('AB');
      expect(concat('A', 'B', 'C')).toBe('ABC');
      done();
    });

  });

  afterEach(window.onload);

});
