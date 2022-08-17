const calculator = require ('./calculator');

describe('add test', () => {
 test('2 + 2 = 4', () => {
   expect(calculator.add(2,2)).toBe(4);
 });
 test('-2 + 2 = 0', () => {
  expect(calculator.add(-2,2)).toBe(0);
});
test('-2 + -2 = -4', () => {
 expect(calculator.add(-2,-2)).toBe(-4);
});
});

describe('subtract test', () => {
 test('2 - 2 = 0', () => {
   expect(calculator.subtract(2,2)).toBe(0);
 });
 test('-2 - 2 = -4', () => {
  expect(calculator.subtract(-2,2)).toBe(-4);
});
test('-2 - -2 = 0', () => {
 expect(calculator.subtract(-2,-2)).toBe(0);
});
});

describe('divide test', () => {
 test('2 / 2 = 1', () => {
   expect(calculator.divide(2,2)).toBe(1);
 });
 test('0 / 2 = 0', () => {
  expect(calculator.divide(0,2)).toBe(0);
});
test('2 / 0 = null', () => {
 expect(calculator.divide(2, 0)).toBe(Infinity);
});
});

describe('multiply test', () => {
 test('2 * 2 = 4', () => {
   expect(calculator.multiply(2,2)).toBe(4);
 });
 test('0 * 2 = 0', () => {
  expect(calculator.multiply(0,2)).toBe(0);
});
test('2 * -2 = -4', () => {
 expect(calculator.multiply(2, -2)).toBe(-4);
});
});