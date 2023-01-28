const sum = require('./sum');

test('sum should calc correctly', () => {
  expect(sum(4, 6)).toBe(10);
})