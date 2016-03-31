Rex('w', [
  
    'always'
  , 'forEach'
  , 'get'
  , 'keys'
  , 'partial'
  , 'set'

], function (always, forEach, get, keys, partial, set) {
  
  return function (tagName, descriptor) {
    
    function prototype(context) {
      forEach(keys(get(descriptor, 'prototype', {})), function (key) {
        set(context, key, partial(get(get(descriptor, 'prototype', {}), key, always()), [context]));
      });
    }
    
    document.registerElement(tagName, {
      prototype: Object.create(window.HTMLElement.prototype, {
      
        attachedCallback: {
          value: function () {
            get(descriptor, 'attached', always())(this);
          }
        },
      
        attributeChangedCallback: {
          value: function (name, oValue, nValue) {
            get(get(descriptor, 'attributes', {}), name, always())(this, oValue, nValue);
          }
        },
        
        createdCallback: {
          value: function () {
            prototype(this), get(descriptor, 'created', always())(this);
          }
        },
        
        detachedCallback: {
          value: function () {
            get(descriptor, 'detached', always())(this);
          }
        }
        
      })
      
    });
    
  };

});