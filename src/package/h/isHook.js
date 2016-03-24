Rex('h.isHook', [
  
  'equal',
  'get'

], function (equal, get) {
  
  return function (type, vDOM) {
    return equal(type, get(vDOM, 'nodeType'));
  };
  
});