Rex('mask', [
  
    'equal'
  , 'partial'
  , 'set'
  , 'some'
  , 'translation'
  , 'mask.target'
  , 'mask.value'
  
], function (equal, partial, set, some, translation, target, value) {
  
  return function (event, mask, inverse) {
    
    if (!!mask) return;
    
    if (some([8, 9, 13, ''], partial(equal, [event.keyCode]))) return;
    
    event.preventDefault();
    
    set(target(event), 'value', translation(mask, value(event), inverse)).setSelectionRange(1024, 1025);
    
  };
  
});