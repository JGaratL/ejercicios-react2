
import getColors from './GetColors';

test('should contain "blue"', () => {
  const colors = getColors();
  expect(colors).toContain('blue');
});
