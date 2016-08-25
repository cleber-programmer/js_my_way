describe('vDOM', () => {

  describe('vRepaint', () => {

    beforeEach(() =>
      (document.body.innerHTML = '<table id="fruits"></table>'));

    it('Verificando a existencia do modulo vRepaint', () => {

      Rex(({ vRepaint }) =>
        expect(vRepaint).toBeDefined());

    });

    it('Extendendo um tag html', () => {

      Rex(({ vRepaint, vTag: { table }, $ }) => {

        vRepaint($('#fruits'), table());        
        expect($('#fruits').tagName).toBe('TABLE');

      });

    });

    it('Substituindo um tag html', () => {

      Rex(({ vRepaint, vTag: { tr }, $ }) => {

        $('#fruits').appendChild(document.createElement('div'));

        vRepaint($('#fruits div'), tr());
        expect($('#fruits tr').tagName).toBe('TR');

      });

    });

    afterEach(window.onload);

  });

});