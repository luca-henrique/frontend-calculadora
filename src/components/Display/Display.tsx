import './display.css';

interface DisplayProps {
  value: number;
}

const Display = ({value}: DisplayProps) => {
  return (
    <div className='display' role='display-result'>
      {value}
    </div>
  );
};

export default Display;
