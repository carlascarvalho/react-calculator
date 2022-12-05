import React, { useReducer } from 'react';
import { getUpdatedNumber, resolveOperation } from '../helpers/calculator';
import { CalculatorAction, Operator } from '../types/calculator';

interface CalculatorState {
  firstNumber: string;
  secondNumber?: string;
  operator?: Operator;
  displayFirstNumber: boolean;
  isLastButtonClickedANumber: boolean;
}

const useCalculator = (): [
  CalculatorState,
  React.Dispatch<CalculatorAction>
] => {
  const initialState = {
    firstNumber: '0',
    secondNumber: undefined,
    operator: undefined,
    displayFirstNumber: true,
    isLastButtonClickedANumber: false,
  };

  const calculatorReducer = (
    state: CalculatorState,
    action: CalculatorAction
  ): CalculatorState => {
    const num1 = parseFloat(state.firstNumber);
    const num2 = parseFloat(state.secondNumber || '0');

    switch (action.type) {
      case 'number':
        if (!state.operator) {
          return {
            ...state,
            firstNumber: getUpdatedNumber(
              state.firstNumber,
              action.payload.value,
              !state.isLastButtonClickedANumber
            ),
            isLastButtonClickedANumber: true,
          };
        }

        return {
          ...state,
          secondNumber: getUpdatedNumber(
            state.secondNumber || '0',
            action.payload.value,
            !state.isLastButtonClickedANumber
          ),
          displayFirstNumber: false,
          isLastButtonClickedANumber: true,
        };

      case 'operator':
        let newOperator =
          action.payload.value !== '=' ? action.payload.value : state.operator;

        if (
          action.payload.value !== '=' &&
          (!state.isLastButtonClickedANumber || !state.secondNumber)
        ) {
          return {
            ...state,
            operator: newOperator,
            displayFirstNumber: true,
            isLastButtonClickedANumber: false,
          };
        }

        const result = resolveOperation(num1, num2, state.operator as Operator);

        return {
          ...state,
          firstNumber: result.toString(),
          operator: newOperator,
          displayFirstNumber: true,
          isLastButtonClickedANumber: false,
        };

      case 'clear':
        return { ...initialState };

      case 'sign':
        if (state.displayFirstNumber) {
          return {
            ...state,
            firstNumber: (num1 * -1).toString(),
            isLastButtonClickedANumber: false,
          };
        }

        return {
          ...state,
          secondNumber: (num2 * -1).toString(),
          isLastButtonClickedANumber: false,
        };

      case 'percentage':
        if (!state.firstNumber) {
          return {
            ...state,
            isLastButtonClickedANumber: false,
          };
        }

        if (!state.operator) {
          return {
            ...state,
            firstNumber: (num1 / 100).toString(),
            isLastButtonClickedANumber: false,
          };
        }

        if (!state.secondNumber) {
          return {
            ...state,
            secondNumber: ((num1 * num1) / 100).toString(),
            isLastButtonClickedANumber: false,
          };
        }

        return {
          ...state,
          secondNumber: ((num1 * num2) / 100).toString(),
          isLastButtonClickedANumber: false,
        };

      case 'decimal':
        if (!state.operator) {
          return {
            ...state,
            firstNumber: state.firstNumber.includes('.')
              ? state.firstNumber
              : state.firstNumber + '.',
            isLastButtonClickedANumber: true,
          };
        }

        let newNumber = state.isLastButtonClickedANumber && state.secondNumber;

        if (!newNumber) {
          newNumber = '0.';
        } else if (!newNumber.includes('.')) {
          newNumber += '.';
        }

        return {
          ...state,
          secondNumber: newNumber,
          displayFirstNumber: false,
          isLastButtonClickedANumber: true,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return [state, dispatch];
};

export default useCalculator;
