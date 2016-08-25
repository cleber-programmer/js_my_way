describe('vDOM', () => {

  describe('vRepaint', () => {

    let fruits;

    beforeEach(() =>
      fruits = document.createElement('table'));

    it('Verificando a existencia do modulo vRepaint', () => {

      Rex(({ vRepaint }) =>
        expect(vRepaint).toBeDefined());

    });

    it('Extendendo um tag html', () => {

      Rex(({ vRepaint, vTag: { table } }) => {

        vRepaint(fruits, table());
        
        expect(fruits.tagName).toBe('TABLE');
        expect(fruits.childNodes.length).toEqual(0);
        expect(fruits.innerHTML).toBe('');

      });

    });

    afterEach(window.onload);

  });

});