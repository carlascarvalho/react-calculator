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

export function getUpdatedNumber(
  number: string,
  digit: string,
  replace: boolean = false
): string {
  const replaceNumber = number === '0' || replace;

  return replaceNumber ? digit : number + digit;
}
