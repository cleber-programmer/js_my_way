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

    afterEach(window.onload);

  });

});