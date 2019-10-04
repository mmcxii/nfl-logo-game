import React, { createContext, useReducer } from 'react';

interface StateProps {
  lives: number;
  numCorrect: number;
  currentAnswer: string;
  usedAnswers: string[];
}

type ActionTypes = 'SET_NEW_ANSWER' | 'INCORRECT_GUESS' | 'CORRECT_GUESS';

interface ActionProps {
  type: ActionTypes;
  payload: any;
}

const initialState: StateProps = {
  lives: 5,
  numCorrect: 0,
  currentAnswer: '',
  usedAnswers: [],
};

export const Store = createContext<StateProps | any>(initialState);

const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'SET_NEW_ANSWER':
      return { ...state, currentAnswer: action.payload };

    case 'CORRECT_GUESS':
      return { ...state, numCorrect: state.numCorrect + 1 };

    case 'INCORRECT_GUESS':
      return { ...state, lives: state.lives - 1 };
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
