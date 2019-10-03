import React from 'react';
import { createGlobalStyle } from 'styled-components';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  html,
  #root {
    height:100vh
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
