import React, { createContext, useReducer } from 'react';

type StateMessage =
  | 'Click a team to get a point! Click the same team more than once and lose a life! Lose all three lives and the game is over!'
  | 'Nice!'
  | 'Good job!'
  | 'Oops! You already used that team!'
  | 'Careful! Only one life remaining!'
  | 'Oh no! You ran out of lives! Try again though!'
  | 'Congratulations! Try to get them all again!';
interface StateProps {
  lives: number;
  message: StateMessage;
  numCorrect: number;
  usedAnswers: string[];
  unusedAnswers: string[];
}

type ActionTypes = 'LOST_GAME' | 'WON_GAME' | 'INCORRECT_GUESS' | 'CORRECT_GUESS';
interface ActionProps {
  type: ActionTypes;
  payload: any;
}

const initialState: StateProps = {
  lives: 3,
  message:
    'Click a team to get a point! Click the same team more than once and lose a life! Lose all three lives and the game is over!',
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
    case 'LOST_GAME':
      return { ...initialState, message: 'Oh no! You ran out of lives! Try again though!' };

    case 'WON_GAME':
      return { ...initialState, message: 'Congratulations! Try to get them all again!' };

    case 'CORRECT_GUESS':
      return {
        ...state,
        message: state.usedAnswers.length % 2 === 0 ? 'Nice!' : 'Good job!',
        usedAnswers: [...state.usedAnswers, action.payload],
        unusedAnswers: state.unusedAnswers.filter(team => team !== action.payload),
        numCorrect: state.numCorrect + 1,
      };

    case 'INCORRECT_GUESS':
      return {
        ...state,
        message:
          state.lives === 2 ? 'Careful! Only one life remaining!' : 'Oops! You already used that team!',
        lives: state.lives - 1,
      };
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
