(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var rgba = require('color-alpha')

  nx.rgba = rgba;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.rgba;
  }
})();
