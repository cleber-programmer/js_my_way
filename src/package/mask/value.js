Rex('mask.value', [
  
    'join'
  , 'slice'
  , 'splice'
  , 'mask.target'
  
], function (join, slice, splice, target) {
  
  return function (event) {
      
    if (!(this instanceof arguments.callee)) {
      return new arguments.callee(event);
    }

    [].push.apply(this, slice(target(event).value));
    
    if (event.keyCode) {
      splice(this, target(event).selectionStart, 1, String.fromCharCode((96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)));
    }
    
    return join(this, '');
    
  };
  
});