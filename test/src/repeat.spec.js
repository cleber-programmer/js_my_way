describe('repeat', () => {

  it('Verificando a existencia do modulo repeat', () => {

    Rex(({ repeat }) =>
      expect(repeat).toBeDefined());

  });

  it('Repetindo um literal valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat('cleber.programmer', 0)).toEqual([]));

  });

  it('Repetindo um literal valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat('cleber.programmer', 1)).toEqual(['cleber.programmer']));

  });

  it('Repetindo um literal valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat('cleber.programmer', 2)).toEqual(['cleber.programmer', 'cleber.programmer']));

  });

  it('Repetindo um numero valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(999, 0)).toEqual([]));

  });

  it('Repetindo um numero valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(999, 1)).toEqual([999]));

  });

  it('Repetindo um numero valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(999, 2)).toEqual([999, 999]));

  });

  it('Repetindo um objeto valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat({ a: 1 }, 0)).toEqual([]));

  });

  it('Repetindo um objeto valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat({ a: 1 }, 1)).toEqual([{ a: 1 }]));

  });

  it('Repetindo um objeto valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat({ a: 1 }, 2)).toEqual([{ a: 1 }, { a: 1 }]));

  });

  it('Repetindo uma matriz valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat([1, 2, 3], 0)).toEqual([]));

  });

  it('Repetindo uma matriz valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat([1, 2, 3], 1)).toEqual([[1, 2, 3]]));

  });

  it('Repetindo uma matriz valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat([1, 2, 3], 2)).toEqual([[1, 2, 3], [1, 2, 3]]));

  });

  it('Repetindo uma data valor 0 vezes', () => {

    let date = new Date();

    Rex(({ repeat }) =>
      expect(repeat(date, 0)).toEqual([]));

  });

  it('Repetindo uma data valor 1 vezes', () => {

    let date = new Date();

    Rex(({ repeat }) =>
      expect(repeat(date, 1)).toEqual([date]));

  });

  it('Repetindo uma data valor 2 vezes', () => {

    let date = new Date();

    Rex(({ repeat }) =>
      expect(repeat(date, 2)).toEqual([date, date]));

  });

  it('Repetindo um valor null valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(null, 0)).toEqual([]));

  });

  it('Repetindo um valor null valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(null, 1)).toEqual([null]));

  });

  it('Repetindo um valor null valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(null, 2)).toEqual([null, null]));

  });

  it('Repetindo um valor undefined valor 0 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(undefined, 0)).toEqual([]));

  });

  it('Repetindo um valor undefined valor 1 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(undefined, 1)).toEqual([undefined]));

  });

  it('Repetindo um valor undefined valor 2 vezes', () => {

    Rex(({ repeat }) =>
      expect(repeat(undefined, 2)).toEqual([undefined, undefined]));

  });

  afterEach(window.onload);

});