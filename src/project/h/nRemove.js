Rex('h.nRemove', [], function () {
  
  return function (son, _, dad) {
    return dad.removeChild(son), { childNodes: [] };
  };
  
});