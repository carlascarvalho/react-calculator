import useCalculator from '../../hooks/useCalculator';
import './styles.css';

const Calculator = () => {
  const [state, dispatcher] = useCalculator();

  return (
    <div className='calculator'>
      <div className='display'>
        {state.displayFirstNumber ? state.firstNumber : state.secondNumber}
      </div>
      <div className='keyboard'>
        <div
          role='button'
          className='modifier'
          onClick={() => dispatcher({ type: 'clear' })}
        >
          AC
        </div>
        <div
          role='button'
          className='modifier'
          onClick={() => dispatcher({ type: 'sign' })}
        >
          +/-
        </div>
        <div
          role='button'
          className='modifier'
          onClick={() => dispatcher({ type: 'percentage' })}
        >
          %
        </div>
        <div
          role='button'
          className='operator'
          onClick={() =>
            dispatcher({ type: 'operator', payload: { value: '/' } })
          }
        >
          &divide;
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '7' } })
          }
        >
          7
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '8' } })
          }
        >
          8
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '9' } })
          }
        >
          9
        </div>
        <div
          role='button'
          className='operator'
          onClick={() =>
            dispatcher({ type: 'operator', payload: { value: '*' } })
          }
        >
          &times;
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '4' } })
          }
        >
          4
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '5' } })
          }
        >
          5
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '6' } })
          }
        >
          6
        </div>
        <div
          role='button'
          className='operator'
          onClick={() =>
            dispatcher({ type: 'operator', payload: { value: '-' } })
          }
        >
          -
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '1' } })
          }
        >
          1
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '2' } })
          }
        >
          2
        </div>
        <div
          role='button'
          className='number'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '3' } })
          }
        >
          3
        </div>
        <div
          role='button'
          className='operator'
          onClick={() =>
            dispatcher({ type: 'operator', payload: { value: '+' } })
          }
        >
          +
        </div>
        <div
          role='button'
          className='number large'
          onClick={() =>
            dispatcher({ type: 'number', payload: { value: '0' } })
          }
        >
          <div>0</div>
          <div></div>
        </div>
        <div
          role='button'
          className='number'
          onClick={() => dispatcher({ type: 'decimal' })}
        >
          .
        </div>
        <div
          role='button'
          className='operator'
          onClick={() =>
            dispatcher({ type: 'operator', payload: { value: '=' } })
          }
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
