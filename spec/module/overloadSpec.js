describe('overload', function () {

  var oneOff;

  beforeEach(function () {
    oneOff = {};
  });

  it('escrevendo uma sobrecarga de funcao', function (done) {

    Rex(['overload'], function (overload) {

      overload(oneOff, 'hello', function (name) {
        return 'Hello ' + name;
      });

      overload(oneOff, 'hello', function (greet, name) {
        return greet + ' ' + name;
      });

      expect(oneOff.hello).toBeDefined();
      expect(oneOff.hello('Cleber')).toEqual('Hello Cleber');
      expect(oneOff.hello('Good morning', 'Cleber')).toEqual('Good morning Cleber');

      done();

    });

  });

});