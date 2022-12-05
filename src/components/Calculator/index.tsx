import './styles.css';

const Calculator = () => {
  return (
    <div className='calculator'>
      <div className='display'>12345</div>
      <div className='keyboard'>
        <div role='button' className='modifier'>
          AC
        </div>
        <div role='button' className='modifier'>
          +/-
        </div>
        <div role='button' className='modifier'>
          %
        </div>
        <div role='button' className='operator'>
          &divide;
        </div>
        <div role='button' className='number'>
          7
        </div>
        <div role='button' className='number'>
          8
        </div>
        <div role='button' className='number'>
          9
        </div>
        <div role='button' className='operator'>
          &times;
        </div>
        <div role='button' className='number'>
          4
        </div>
        <div role='button' className='number'>
          5
        </div>
        <div role='button' className='number'>
          6
        </div>
        <div role='button' className='operator'>
          -
        </div>
        <div role='button' className='number'>
          1
        </div>
        <div role='button' className='number'>
          2
        </div>
        <div role='button' className='number'>
          3
        </div>
        <div role='button' className='operator'>
          +
        </div>
        <div role='button' className='number large'>
          <div>0</div>
          <div></div>
        </div>
        <div role='button' className='number'>
          .
        </div>
        <div role='button' className='operator'>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
