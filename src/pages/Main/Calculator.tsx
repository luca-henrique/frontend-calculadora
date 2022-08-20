import './calculator.css';

import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';
import {useState} from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  const changeOperation = () => {};

  const addDigit = (n: string) => {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }

    const clearDisplayLocal = displayValue === '0' || clearDisplay;

    const currentValue = clearDisplayLocal ? '' : displayValue;

    const displayValueLocal = currentValue + n;

    setDisplayValue(displayValueLocal);

    if (n !== '.') {
      const indexArrayValues = current;

      const newValue = parseFloat(displayValueLocal);

      const copyValues = [...values];

      copyValues[indexArrayValues] = newValue;

      setValues(copyValues);
    }
  };

  console.log(values);

  return (
    <div className='calculator'>
      <Display value={displayValue} />
      <Button label='AC' type='triple' handleClick={clearMemory} />
      <Button label='/' handleClick={changeOperation} type='operation' />
      <Button label='7' handleClick={addDigit} />
      <Button label='8' handleClick={addDigit} />
      <Button label='9' handleClick={addDigit} />
      <Button label='*' handleClick={changeOperation} type='operation' />
      <Button label='4' handleClick={addDigit} />
      <Button label='5' handleClick={addDigit} />
      <Button label='6' handleClick={addDigit} />
      <Button label='-' handleClick={changeOperation} type='operation' />
      <Button label='1' handleClick={addDigit} />
      <Button label='2' handleClick={addDigit} />
      <Button label='3' handleClick={addDigit} />
      <Button label='+' handleClick={changeOperation} type='operation' />
      <Button label='0' handleClick={addDigit} type='double' />
      <Button label='.' handleClick={addDigit} />
      <Button label='=' handleClick={changeOperation} type='operation' />
    </div>
  );
};

export default Calculator;
