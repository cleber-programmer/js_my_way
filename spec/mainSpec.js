(function (context) {

  describe('main.js', function () {
    
    it('cria um modulo chamado add', function () {

      context.$('add', [], function () {
        return function (a, b) {
          return a + b;
        };
      });

    });

    it('executa o modulo add', function () {

      context.$(['add'], function (add) {
        expect(add(1, 2)).toEqual(3);
      });

    });

    it('cria um modulo chamado hello com dependencia do modulo add', function () {

      context.$('hello', ['add'], function (add) {
        return function (a) {
          return add('hello ', a);
        };
      });

    });

    it('executa o modulo hello', function () {

      context.$(['hello'], function (hello) {
        expect(hello('cleber.programmer')).toEqual('hello cleber.programmer');
      });

    });

  });

})(this);