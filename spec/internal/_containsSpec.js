(function (context) {

  describe('_contains', function () {

    it('verifica a existencia de um objeto', function () {

      var o1 = { a: 1, b: 2 };
      var o2 = { c: 3, d: 4 };

      expect(context._contains([o1, o2], o1)).toEqual(true);

    });

    it('verifica a nao existencia de um objeto', function () {
      
      var o1 = { a: 1, b: 2 };
      var o2 = { c: 3, d: 4 };

      expect(context._contains([o1, o2], { e: 5, f: 6 })).toEqual(false);

    });

    it('verifica a existencia de um array', function () {

      var a1 = [1, 2];
      var a2 = [3, 4];

      expect(context._contains([a1, a2], a1)).toEqual(true);

    });

    it('verifica a nao existencia de um array', function () {
      
      var a1 = [1, 2];
      var a2 = [3, 4];

      expect(context._contains([a1, a2], [5, 6])).toEqual(false);

    });

    it('verifica a existencia de um numero', function () {
      expect(context._contains([1, 2, 3], 1)).toEqual(true);
    });

    it('verifica a nao existencia de um numero', function () {
      expect(context._contains([1, 2, 3], 0)).toEqual(false);
    });

    it('verifica a existencia de um literal', function () {
      expect(context._contains(['orange', 'banana', 'apple'], 'apple')).toEqual(true);
    });

    it('verifica a nao existencia de um literal', function () {
      expect(context._contains(['orange', 'banana', 'apple'], 'potato')).toEqual(false);
    });

  });

})(this);