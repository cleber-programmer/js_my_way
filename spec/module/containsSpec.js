(function (context) {

  describe('contains', function () {

    it('verifica a existencia de um objeto', function (done) {

      context.Rex(['contains'], function (contains) {
        
        var o1 = { a: 1, b: 2 };
        var o2 = { c: 3, d: 4 };

        expect(contains([o1, o2], o1)).toEqual(true);
        done();

      });

    });

    it('verifica a nao existencia de um objeto', function (done) {

      context.Rex(['contains'], function (contains) {
      
        var o1 = { a: 1, b: 2 };
        var o2 = { c: 3, d: 4 };

        expect(contains([o1, o2], { e: 5, f: 6 })).toEqual(false);
        done();

      });

    });

    it('verifica a existencia de um array', function (done) {

      context.Rex(['contains'], function (contains) {

        var a1 = [1, 2];
        var a2 = [3, 4];

        expect(contains([a1, a2], a1)).toEqual(true);
        done();

      });

    });

    it('verifica a nao existencia de um array', function (done) {

      context.Rex(['contains'], function (contains) {
      
        var a1 = [1, 2];
        var a2 = [3, 4];

        expect(contains([a1, a2], [5, 6])).toEqual(false);
        done();

      });

    });

    it('verifica a existencia de um numero', function (done) {

      context.Rex(['contains'], function (contains) {

        expect(contains([1, 2, 3], 1)).toEqual(true);
        done();

      });

    });

    it('verifica a nao existencia de um numero', function (done) {

      context.Rex(['contains'], function (contains) {

        expect(contains([1, 2, 3], 0)).toEqual(false);
        done();

      });

    });

    it('verifica a existencia de um literal', function (done) {

      context.Rex(['contains'], function (contains) {

        expect(contains(['orange', 'banana', 'apple'], 'apple')).toEqual(true);
        done();

      });

    });

    it('verifica a nao existencia de um literal', function (done) {

      context.Rex(['contains'], function (contains) {

        expect(contains(['orange', 'banana', 'apple'], 'potato')).toEqual(false);
        done();

      });

    });

  });

})(this);