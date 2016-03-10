(function (context) {

  describe('_overlaod.js', function () {

    var oneOff;

    beforeEach(function () {

      oneOff = {};

      context._overload(oneOff, 'add', function (a, b) {
        return a + b;
      });

      context._overload(oneOff, 'add', function (a, b, c) {
        return a + b + c;
      });

    });

    it('executa a funcao add com 1 parametro', function () {
      expect(oneOff.add(1)).toEqual(NaN);
    });

    it('executa a funcao add com 2 parametros', function () {
      expect(oneOff.add(1, 2)).toEqual(3);
    });

    it('executa a funcao add com 3 parametros', function () {
      expect(oneOff.add(1, 2, 3)).toEqual(6);
    });

    it('executa a funcao add com 4 parametros', function () {
      expect(oneOff.add(1, 2, 3, 4)).toEqual(3);
    });

  });

})(this);