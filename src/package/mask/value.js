Rex('mask.value', [
  
    'join'
  , 'push'
  , 'slice'
  , 'splice'
  , 'mask.target'
  
], function (join, push, slice, splice, target) {
  
  return function (event) {
      
    if (!(this instanceof arguments.callee)) {
      return new arguments.callee();
    }

    push(this, slice(target(event).value));
    
    if (event.keyCode) {
      splice(this, target(event).selectionStart, 1, String.fromCharCode((96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)));
    }
    
    return join(this, '');
    
  };
  
});