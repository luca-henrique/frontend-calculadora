import {render, screen} from '@testing-library/react';
import Calculator from './Calculator';

test('Render page', () => {
  const {container} = render(<Calculator />);
  expect(container.getElementsByClassName('calculator').length).toBe(1);
});
