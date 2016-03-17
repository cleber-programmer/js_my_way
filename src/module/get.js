this.Rex('get', ['or'], function (or) {

  return function (object, key, alternative) {
    return or(or(object, {})[key], alternative);
  }

});