Rex('mask.value', [
  
    'join'
  , 'slice'
  , 'splice'
  , 'mask.target'
  
], function (join, slice, splice, target) {
  
  return function (event) {
    return (function (chars) {
      
      [].push.apply(chars, slice(target(event).value));
      
      if (event.keyCode) {
        splice(chars, target(event).selectionStart, 1, String.fromCharCode((96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)));
      }
      
      return join(chars, '');
      
    })([]);
  };
  
});