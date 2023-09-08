import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectComponent from './SelectComponent';  // Asegúrate de que esta ruta es la correcta

test('should render the correct options', () => {
  const items = ['apple', 'banana', 'cherry'];
  const { getByText } = render(<SelectComponent items={items} value={items[0]} onChange={() => {}} />);

  items.forEach(item => {
    expect(getByText(item)).toBeInTheDocument();
  });
});

test('it should handle onChange events correctly', () => {
  const handleChange = jest.fn();
  const items = ['apple', 'banana', 'cherry'];
  const { getByText } = render(<SelectComponent items={items} value={items[0]} onChange={handleChange} />);

  userEvent.selectOptions(getByText(items[0]).closest('select'), [items[1]]);
  expect(handleChange).toHaveBeenCalled();
});
