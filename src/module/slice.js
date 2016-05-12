Rex('slice', [
  
    'cond'
  , 'isString'
  , 't'


], function (cond, isString, t) {

  return function (value) {
    return cond([
      
        [
            isString
          , function () {
              return ''.slice.apply(value, [].slice.call(arguments, 1));
            }
        ]
      
      , [
            t
          , function () {
              return [].slice.apply(value, [].slice.call(arguments, 1));
            }
        ]
      
    ])(value);
  };

});