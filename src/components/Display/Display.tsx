import './display.css';

interface DisplayProps {
  value: string;
}

const Display = ({value}: DisplayProps) => {
  return (
    <div className='display' role='display-result'>
      {value}
    </div>
  );
};

export default Display;
