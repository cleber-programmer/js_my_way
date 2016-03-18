Rex('iterator', [

  'add',
  'clone',
  'get',
  'gt',
  'lt',
  'partial',
  'slice'

], function (add, clone, get, gt, lt, partial, slice) {
  
  return partial(function (index, data) {
    
    return !(this instanceof arguments.callee)

    ? new arguments.callee(data)
    
    : {
      
      get current() {
        return get(data, index, null);
      },
      
      get data() {
        return clone(data);
      },
      
      get index() {
        return index;
      },
      
      get hasNext() {
        return lt(add(1, index), get(data, 'length', 0));
      },
      
      get hasPrev() {
        return gt(add(-1, index), -1);
      },
      
      get isFirst() {
        return !this.hasPrev;
      },
      
      get isLast() {
        return !this.hasNext;
      },
      
      get length() {
        return data.length;
      },
      
      next: function () {
        return get(data, index += 1, null);
      },
      
      prev: function () {
        return get(data, index -= 1, null);
      },
      
      rewind: function () {
        return index = -1, this;
      }
      
    };

  }, [-1]);
  
});