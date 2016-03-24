Rex('h.nExchange', ['h.cElement'], function (cElement) {
  
  return function (son, vDOM, dad) {
    return dad.replaceChild(cElement(vDOM), son);
  };
  
});