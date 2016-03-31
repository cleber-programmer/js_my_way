Rex('w.root', [
  
    'get'
  , 'set'

], function (get, set) {
  
  return function (context) {
    return get(set(context, 'innerHTML', '<div></div>'), 'childNodes', [])[0];
  };
  
});