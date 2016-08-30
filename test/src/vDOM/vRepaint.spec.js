describe('vDOM', () => {

  describe('vRepaint', () => {

    beforeEach(() =>
      (document.body.innerHTML = `
        <table id="fruits">
          <th>
            <td>letter</td>
            <td>fruit</td>
          </th>
          <tr>
            <td>a</td>
            <td>apple</td>
          </tr>
          <tr>
            <td>b</td>
            <td>banana</td>
          </tr>
          <tr>
            <td>c</td>
            <td>cherry</td>
          </tr>
        </table>
      `));

    it('Verificando a existencia do modulo vRepaint', () => {

      Rex(({ vRepaint }) =>
        expect(vRepaint).toBeDefined());

    });

    it('Removendo um elemento html', () => {

      Rex(({ vRepaint, vTag: { table, td, th, tr }, vText, $ }) => {

        vRepaint($('#fruits'), table([
          th([
            td(vText('letter')),
            td(vText('fruit'))
          ]),
          tr([
            td(vText('a')),
            td(vText('apple'))
          ]),
          tr([
            td(vText('b')),
            td(vText('banana'))
          ])
        ]));

        expect($('#fruits').childNodes.length).toBe(3);

      });

    });

    it('Adicionando um novo elemento html', () => {

      Rex(({ vRepaint, vTag: { table, td, th, tr }, vText, $ }) => {

        vRepaint($('#fruits'), table([
          th([
            td(vText('letter')),
            td(vText('fruit'))
          ]),
          tr([
            td(vText('a')),
            td(vText('apple'))
          ]),
          tr([
            td(vText('b')),
            td(vText('banana'))
          ]),
          tr([
            td(vText('c')),
            td(vText('cherry'))
          ]),
          tr([
            td(vText('d')),
            td(vText('durian'))
          ])
        ]));

        expect($('#fruits').childNodes.length).toBe(5);

      });

    });

    it('Trocando um elemento html', () => {

      Rex(({ vRepaint, vTag: { table, td, th, tr }, vText, $ }) => {

        expect($('#fruits').childNodes[0].tagName).toBe('TH');

        vRepaint($('#fruits'), table([
          tr([
            td(vText('letter')),
            td(vText('fruit'))
          ]),
          tr([
            td(vText('a')),
            td(vText('apple'))
          ]),
          tr([
            td(vText('b')),
            td(vText('banana'))
          ]),
          tr([
            td(vText('c')),
            td(vText('cherry'))
          ])
        ]));

        expect($('#fruits').childNodes[0].tagName).toBe('TR');

      });

    });

    it('Extendendo um elemento html', () => {

      Rex(({ vRepaint, vTag: { table, td, th, tr }, vText, $ }) => {

        vRepaint($('#fruits'), table({ id: 'new_id' }, [
          th([
            td(vText('letter')),
            td(vText('fruit'))
          ]),
          tr([
            td(vText('a')),
            td(vText('apple'))
          ]),
          tr([
            td(vText('b')),
            td(vText('banana'))
          ]),
          tr([
            td(vText('c')),
            td(vText('cherry'))
          ])
        ]));

        expect($('#fruits')).toBe(null);
        expect($('#new_id')).toBeDefined();

      });

    });

    afterEach(window.onload);

  });

});