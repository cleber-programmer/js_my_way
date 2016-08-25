describe('vDOM', () => {

  describe('vProperties', () => {

    it('Verificando a existencia do modulo vProperties', () => {

      Rex(({ vProperties }) =>
        expect(vProperties).toBeDefined());

    });

    it('Passando um objeto deve retornar a referencia deste objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties({ nickname: 'cleber.programmer' })).toEqual({ nickname: 'cleber.programmer' }));

    });

    it('Passando uma matriz deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties(['cleber.programmer'])).toEqual({}));

    });

    it('Passando uma data deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties(new Date())).toEqual({}));

    });

    it('Passando um literal deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties('cleber.programmer')).toEqual({}));

    });

    it('Passando um numero deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties(0)).toEqual({}));

    });

    it('Passando null deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties(null)).toEqual({}));

    });

    it('Passando undefined deve retornar um novo objeto', () => {

      Rex(({ vProperties }) =>
        expect(vProperties(undefined)).toEqual({}));

    });

    afterEach(window.onload);

  });

});