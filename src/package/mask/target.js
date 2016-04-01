Rex('mask.target', [], function () {
  
  return function (event) {
    return event.toElement || event.srcTarget || event.target || event.srcElement;
  };
  
});