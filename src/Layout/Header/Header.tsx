import React, { useContext } from 'react';
import styled from 'styled-components';

import { Store } from 'Store';
import { spacing } from 'Utilities';
import { NFL } from 'Elements';
import { Container } from 'Layout';

interface Props {}

const Header: React.FC<Props> = () => {
  const { state } = useContext(Store);

  return (
    <Wrapper>
      <HeaderContainer>
        <img src={NFL} alt='NFL Logo' />
        <UserStats>
          <p>
            <strong>Lives Remaining:</strong> {state.lives}
          </p>
          <p>
            <strong>Correct Guesses:</strong> {state.numCorrect}
          </p>
        </UserStats>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background: #fff;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.sm};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
