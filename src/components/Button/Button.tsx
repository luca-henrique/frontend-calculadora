import React, {ReactElement} from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  type?: string;
  handleClick?: any;
}

const Button = ({label, type, handleClick}: ButtonProps) => {
  return (
    <button onClick={() => handleClick(label)} className={`button ${type}`}>
      {label}
    </button>
  );
};

export default Button;
