const { isString } = require('../../../dist/lib/es5');

describe('isString', () => {
  test('true', () => {
    expect(isString('single')).toBe(true);
    expect(isString("double")).toBe(true);
    expect(isString(`backticks`)).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString("")).toBe(true);
    expect(isString(``)).toBe(true);
  });

  test('false', () => {
    expect(isString(67)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(false)).toBe(false);
  });
});
