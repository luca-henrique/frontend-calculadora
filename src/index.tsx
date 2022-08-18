import ReactDOM from 'react-dom/client';
import Calculator from './pages/Main/Calculator';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<Calculator />);
