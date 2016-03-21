(function (context) {

  describe('main.js', function () {

    it('cria um modulo chamado hello com dependencia do modulo add', function () {

      context.Rex('hello', ['add'], function (add) {
        return function (a) {
          return add('hello ', a);
        };
      });

      expect(true).toBe(true);

    });

    it('executa o modulo hello', function (done) {

      context.Rex(['hello'], function (hello) {
        expect(hello('cleber.programmer')).toEqual('hello cleber.programmer');
        done();
      });

    });

  });

})(this);