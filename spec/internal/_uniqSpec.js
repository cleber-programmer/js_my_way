(function (context) {

  describe('_uniq', function () {

    it('exclui objetos dublicados', function () {

      var o1 = { a: 1, b: 2 };
      var o2 = { c: 3, d: 4 };

      expect(context._uniq([o1, o2, o1])).toEqual([o1, o2]);

    });

    it('exclui arrays dublicados', function () {

      var a1 = [1, 2];
      var a2 = [3, 4];

      expect(context._uniq([a1, a2, a1])).toEqual([a1, a2]);

    });

    it('exclui literais duplicadas', function () {
      expect(context._uniq(['orange', 'banana', 'orange', 'apple', 'banana'])).toEqual(['orange', 'banana', 'apple']);
    });

    it('exclui numero duplicados', function () {
      expect(context._uniq([1, 2, 3, 1])).toEqual([1, 2, 3]);
    });

  });

})(this);