import { getColors, removeColorFromArray } from './BlueArray';

test('array should have 2 elements after removing "blue"', () => {
  const result = removeColorFromArray(getColors(), 'blue');
  expect(result.length).toBe(2);
});

test('"blue" should not exist in the array after removal', () => {
  const result = removeColorFromArray(getColors(), 'blue');
  expect(result).not.toContain('blue');
});
