(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.rgba basic test case', function () {
      expect(nx.rgba('red')).toBe('rgba(255,0,0,1)');
      expect(nx.rgba('red', 0.1)).toBe('rgba(255,0,0,0.1)');
      expect(nx.rgba('#000', 0.1)).toBe('rgba(0,0,0,0.1)');
      expect(nx.rgba('#fefefe', 0.1)).toBe('rgba(254,254,254,0.1)');
    });
  });
})();
