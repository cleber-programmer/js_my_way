(function (context) {

  describe('main.js', function () {

    var oneOff;

    beforeEach(function () {
      oneOff = {};
    });

    it('cria um modulo', function () {

      context.$('add', [], function () {
        return function (a, b) {
          return a + b;
        };
      });

      context.$(['add'], function (add) {
        expect(add(1, 2)).toEqual(2);
      });

    });

    it('cria um modulo com dependencia', function () {

      context.$('hello', ['add'], function (add) {
        return function (a) {
          return add('hello ', a);
        };
      });

      context.$(['hello'], function (hello) {
        expect(hello('cleber.programmer')).toEqual('hello cleber.programmer');
      });

    });

  });

})(this);