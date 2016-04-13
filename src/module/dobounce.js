Rex('dobounce', [
  
    'partial'
  , 'slice'
  
], function (partial, slice) {
  
  return function (wait, callback, timeoutID) {
    return function () {
        (timeoutID = window.clearTimeout(timeoutID))
      , (timeoutID = window.setTimeout(partial(callback, slice(arguments)), wait));
    };
  };
  
});