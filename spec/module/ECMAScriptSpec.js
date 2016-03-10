(function (context) {

  describe('ECMAScript', function () {

    describe('Object', function () {

      it('a funcao assign foi definida', function () {

        context.$(['assign'], function (assign) {
          expect(assign).toBeDefined();
        });

      });

    });

  });

})(this);