(function (context) {

  describe('remove', function () {

    it('removendo um objeto', function (done) {

      context.Rex(['remove'], function (remove) {

        var o1 = { a: 0 };
        var o2 = { a: 1 };

        expect(remove([o1, o2], o1)).toEqual([o2]);
        done();

      });

    });

    it('removendo um array', function (done) {

      context.Rex(['remove'], function (remove) {

        var a1 = [0];
        var a2 = [1];

        expect(remove([a1, a2], a1)).toEqual([a2]);
        done();
        
      });

    });

    it('removendo um numero', function (done) {

      context.Rex(['remove'], function (remove) {
        expect(remove([1, 2, 3], 2)).toEqual([1, 3]);
        done();
      });

    });

    it('removendo um literal', function (done) {

      context.Rex(['remove'], function (remove) {
        expect(remove(['orange', 'banana', 'apple'], 'apple')).toEqual(['orange', 'banana']);
        done();
      });

    });

  });

})(this);