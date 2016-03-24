Rex('http.interceptor.json', ['or'], function (or) {

  return {

    request: function (data) {
      return JSON.stringify(or(data, ''));
    },

    response: function (data) {
      return JSON.parse(or(data || '{}'));
    }

  };

});