/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var isNil = require('../../../dist/lib/es5').isNil;
describe('isNil', function () {
    test('true', function () {
        expect(isNil(undefined)).toBe(true);
        expect(isNil(null)).toBe(true);
    });
    test('false', function () {
        expect(isNil('')).toBe(false);
        expect(isNil([])).toBe(false);
        expect(isNil({})).toBe(false);
    });
});
