(function (context) {

  describe('_overlaod.js', function () {

    var oneOff;

    beforeEach(function () {
      oneOff = {};
    });

    it('cria sobrecarga de funcao', function () {

      context._overload(oneOff, 'add', function (a, b) {
        return a + b;
      });

      context._overload(oneOff, 'add', function (a, b, c) {
        return a + b + c;
      });

      expect(oneOff.add(1)).toEqual(NaN);
      expect(oneOff.add(1, 2)).toEqual(3);
      expect(oneOff.add(1, 2, 3)).toEqual(6);
      expect(oneOff.add(1, 2, 3, 4)).toEqual(3);

    });

  });

})(this);