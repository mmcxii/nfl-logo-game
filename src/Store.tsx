import React, { createContext, useReducer } from 'react';

interface StateProps {
  lives: number;
  numCorrect: number;
  usedAnswers: string[];
  unusedAnswers: string[];
}

type ActionTypes = 'RESET_GAME' | 'INCORRECT_GUESS' | 'CORRECT_GUESS';

interface ActionProps {
  type: ActionTypes;
  payload: any;
}

const initialState: StateProps = {
  lives: 3,
  numCorrect: 0,
  usedAnswers: [],
  unusedAnswers: [
    'AZ',
    'ATL',
    'BAL',
    'BUF',
    'CAR',
    'CHI',
    'CIN',
    'CLE',
    'DAL',
    'DEN',
    'DET',
    'GB',
    'HOU',
    'IND',
    'JAC',
    'KC',
    'LAC',
    'LAR',
    'MIA',
    'MIN',
    'NE',
    'NO',
    'NYG',
    'NYJ',
    'OAK',
    'PHI',
    'PIT',
    'SF',
    'SEA',
    'TB',
    'TEN',
    'WAS',
  ],
};

export const Store = createContext<StateProps | any>(initialState);

const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'RESET_GAME':
      return { ...initialState };

    case 'CORRECT_GUESS':
      return {
        ...state,
        usedAnswers: [...state.usedAnswers, action.payload],
        numCorrect: state.numCorrect + 1,
      };

    case 'INCORRECT_GUESS':
      return { ...state, lives: state.lives - 1 };
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
