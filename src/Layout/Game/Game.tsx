import React, { useContext } from 'react';
import styled from 'styled-components';

import { Store } from 'Store';
import { teams, LogoButton } from 'Elements';
import Container from '../Container';

interface Props {}

const Game: React.FC<Props> = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Wrapper>
      <Teams>
        {teams.map(team => (
          <LogoButton
            key={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            textColor={team.textColor}
          >
            <img src={team.logo} />

            <h3>{team.name}</h3>
          </LogoButton>
        ))}
      </Teams>
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.main``;

const Teams = styled(Container).attrs({ as: 'section' })`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;
