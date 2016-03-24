Rex('h.nInsert', [

  'equal',
  'get',
  'h.cElement'

], function (equal, get, cElement) {
  
  return function (_, vDOM, dad) {
    return equal(get(dad, 'nodeType', 0), 1) && dad.appendChild(cElement(vDOM));
  };
  
});