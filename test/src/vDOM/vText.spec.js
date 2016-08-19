describe('vDOM', () => {

  describe('vText', () => {

    it('Verificando a existencia do modulo vText', () => {

      Rex(({ vText }) =>
        expect(vText).toBeDefined());

    });

    it('Retorna uma replica do Node Text', () => {

      Rex(({ vText }) =>
        expect(vText('cleber.programmer')).toEqual({ textContent:'cleber.programmer', nodeType: 3, [Symbol.toStringTag]: 'vText' }));

    });

    it('Verificado o tipo do virtual node, deve retornar [object vText]', () => {

      Rex(({ vText }) =>
        expect(Object.prototype.toString.call(vText('cleber.programmer'))).toBe('[object vText]'));

    });

    it('Passado um literal para o vText, deve retornar um literal', () => {

      Rex(({ vText }) =>
        expect(vText('cleber.programmer').textContent).toBe('cleber.programmer'));

    });

    it('Passado um numero para o vText, deve retornar um literal com o numero informado', () => {

      Rex(({ vText }) =>
        expect(vText(46314083).textContent).toBe('46314083'));

    });

    it('Passado um matrix para o vText, deve retornar um literal com os valores da matrix informado', () => {

      Rex(({ vText }) =>
        expect(vText([1, 2, 3]).textContent).toBe('1,2,3'));

    });

    it('Passado um objeto para o vText, deve retornar um literal indicando que o valor é um objeto [object Object] informado', () => {

      Rex(({ vText }) =>
        expect(vText({ nickname: 'cleber.programmer' }).textContent).toBe('[object Object]'));

    });

    it('Passado uma data para o vText, deve retornar um literal com a data compoleta informado', () => {

      Rex(({ vText }) =>
        expect(vText(new Date()).textContent).toBe(String(new Date())));

    });

    afterEach(window.onload);

  });

});