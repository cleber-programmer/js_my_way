Rex('restrict', [

  'compose',
  'contains',
  'filter',
  'keys',
  'not',
  'partial',
  'pick'

], function (compose, contains, filter, keys, partial, pick) {

	return function (restricted, object) {
    return pick(filter(keys(restricted), compose(not, partial(contains, [keys(object)]))), restricted);
  }

});