Rex('mask.value', [
  
    'concat'
  , 'join'
  , 'slice'
  , 'splice'
  , 'mask.target'
  
], function (concat, join, slice, splice, target) {
  
  return function (event) {
    return (function (chars) {
      
      concat(chars, slice(target(event).value));
      
      if (event.keyCode) {
        splice(chars, target(event).selectionStart, 1, String.fromCharCode((96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)));
      }
      
      return join(chars, '');
      
    })([]);
  };
  
});