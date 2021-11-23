import { isNumber } from '../../../dist/lib/es6';

describe('isNumber', () => {
  test('true', () => {
    expect(isNumber(6)).toBe(true);
  });

  test('false', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
