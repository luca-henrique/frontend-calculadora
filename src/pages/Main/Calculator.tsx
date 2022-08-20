import './calculator.css';

import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';
import {useState} from 'react';

const Calculator = () => {
  const [total, setTotal] = useState(0);

  const clearMemory = () => {
    setTotal(0);
  };

  const setOperation = () => {};

  const addDigit = () => {};

  return (
    <div className='calculator'>
      <Display value={total} />
      <Button label='AC' type='triple' handleClick={clearMemory} />
      <Button label='/' handleClick={setOperation} type='operation' />
      <Button label='7' handleClick={addDigit} />
      <Button label='8' handleClick={addDigit} />
      <Button label='9' handleClick={addDigit} />
      <Button label='*' handleClick={setOperation} type='operation' />
      <Button label='4' handleClick={addDigit} />
      <Button label='5' handleClick={addDigit} />
      <Button label='6' handleClick={addDigit} />
      <Button label='-' handleClick={setOperation} type='operation' />
      <Button label='1' handleClick={addDigit} />
      <Button label='2' handleClick={addDigit} />
      <Button label='3' handleClick={addDigit} />
      <Button label='+' handleClick={setOperation} type='operation' />
      <Button label='0' handleClick={addDigit} type='double' />
      <Button label='.' handleClick={addDigit} />
      <Button label='=' handleClick={setOperation} type='operation' />
    </div>
  );
};

export default Calculator;
