import {render, screen} from '@testing-library/react';
import Display from './Display';

it('slould render value into props', () => {
  render(<Display value={100} />);
  const displayValue = screen.getByText(/100/i);
  expect(displayValue).toBeInTheDocument();
});

it('slould render container', () => {
  render(<Display value={100} />);
  const containerDisplay = screen.getByRole('display-result');
  expect(containerDisplay).toBeInTheDocument();
});

it('slould render class', () => {
  const {container} = render(<Display value={100} />);
  expect(container.getElementsByClassName('display').length).toBe(1);
});
