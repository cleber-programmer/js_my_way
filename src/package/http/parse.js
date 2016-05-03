Rex('http.parse', ['or'], function (or) {

  return {

    request: function (method, url, data, xhr) {
      return JSON.stringify(or(data, ''));
    },

    response: function (method, url, data, xhr) {
      return JSON.parse(or(data || '{}'));
    }

  };

});