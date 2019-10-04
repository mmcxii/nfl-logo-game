import React, { useContext } from 'react';
import styled from 'styled-components';

import { Store } from 'Store';

interface Props {}

const Header: React.FC<Props> = () => {
  const { state } = useContext(Store);

  return (
    <Wrapper>
      <p>Current Lives: {state.lives}</p>
      <p>Correct Guesses: {state.numCorrect}</p>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header``;
