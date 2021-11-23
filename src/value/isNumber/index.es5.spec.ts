const { isNumber } = require('../../../dist/lib/es5');

describe('isNumber', () => {
  test('true', () => {
    expect(isNumber(67)).toBe(true);
  });

  test('false', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
