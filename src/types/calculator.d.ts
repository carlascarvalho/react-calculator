export interface NumberAction {
  type: 'number';
  payload: {
    value: string;
  };
}

export type Operator = '+' | '-' | '*' | '/' | '=';

export interface OperatorAction {
  type: 'operator';
  payload: {
    value: Operator;
  };
}

export interface ClearAction {
  type: 'clear';
}

export interface SignChangeAction {
  type: 'sign';
}

export interface PercentageAction {
  type: 'percentage';
}

export interface DecimalAction {
  type: 'decimal';
}

export type CalculatorAction =
  | NumberAction
  | OperatorAction
  | ClearAction
  | SignChangeAction
  | PercentageAction
  | DecimalAction;
