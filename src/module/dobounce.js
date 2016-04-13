Rex('dobounce', ['partial'], function (partial) {
  
  return function (wait, callback, timeoutID) {
    return function () {
        (timeoutID = window.clearTimeout(timeoutID))
      , (timeoutID = window.setTimeout(partial(callback, arguments), wait));
    }
  };
  
});