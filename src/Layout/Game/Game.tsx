import React, { useContext } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { Store } from 'Store';
import { spacing } from 'Utilities';
import { teams, LogoButton } from 'Elements';
import Container from '../Container';
import InfoBanner from './InfoBanner';

interface Props {}

const Game: React.FC<Props> = () => {
  const { state, dispatch } = useContext(Store);

  const handleClick = (team: string) => {
    teams.sort(() => Math.random() - 0.5);

    // Check if the team is present in the unused answers array
    const teamHasNotBeenUsed = state.unusedAnswers.some((item: string) => item === team);

    // Mark guess as correct if the team has not been used before
    if (teamHasNotBeenUsed) {
      return dispatch({ type: 'CORRECT_GUESS', payload: team });
    }

    // If the player loses their last life reset the game
    if (state.lives === 1) {
      return dispatch({ type: 'LOST_GAME' });
    }

    // If the guess is wrong and the player still has remaining lives, decrement lives
    return dispatch({ type: 'INCORRECT_GUESS' });
  };

  return (
    <Wrapper>
      <InfoBanner />

      <Teams>
        {teams.map(team => (
          <TeamWrapper id={team.abbreviation} key={team.name}>
            <LogoButton
              primaryColor={team.primaryColor}
              secondaryColor={team.secondaryColor}
              textColor={team.textColor}
              onClick={() => handleClick(team.abbreviation)}
            >
              <img src={team.logo} alt={team.name} />

              <h3>{team.name}</h3>
            </LogoButton>
          </TeamWrapper>
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

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamWrapper = styled(Overdrive).attrs({ element: 'article' })`
  margin: ${spacing.md};
`;
