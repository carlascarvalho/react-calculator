import { Operator } from '../types/calculator';

export function resolveOperation(
  firstNum: number,
  secondNum: number,
  operation: Operator
): number {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      return firstNum / secondNum;
    default:
      return firstNum;
  }
}
