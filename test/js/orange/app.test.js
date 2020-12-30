require('../../../src/js/orange')

test('hoge test', () => {
  expect(global).toBe(window);
  expect(global).toBe(global.window);
    expect(1 + 2).toBe(3);
});
