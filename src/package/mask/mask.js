Rex('mask', [
  
    'equal'
  , 'partial'
  , 'some'
  , 'translation'
  , 'mask.target'
  , 'mask.value'
  
], function (equal, partial, some, translation, target, value) {
  
  return function (event, mask, inverse) {
    
    if (some([8, 9, 13, ''], partial(equal, [event.keyCode]))) {
      return;
    }
    
    event.preventDefault();
    
    target(event).value = translation(mask, value(event), inverse);
    target(event).setSelectionRange(1024, 1025);
    
  };
  
});