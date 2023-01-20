import React from 'react';
import './styles.css';

type Props = {
  value?: string;
};

const Display: React.FC<Props> = ({ value }) => {
  const formatNumber = (number: string = '0') => {
    if (number.length < 8) {
      return number;
    }

    return Number(number).toExponential(8);
  };

  return <div className='display'>{formatNumber(value)}</div>;
};

export default Display;
