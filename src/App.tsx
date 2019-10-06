import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import { Footer, Game, Header } from 'Layout';
import bg from 'Images/bg.jpg';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />

      <Header />
      <Game />
      <Footer />
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  html,
  #root {
    min-height:100vh
  }

  #root {
    display: flex;
    flex-direction: column;
    background: url(${bg}) no-repeat;
    background-size: cover;
    background-position: fixed;

    font-family: Be Vietnam
    
  }
`;
