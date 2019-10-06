import React, { useContext } from 'react';
import styled from 'styled-components';

import { Store } from 'Store';
import { transition, spacing, rounded, nflBlue, nflRed } from 'Utilities';
import hero from 'Images/hero.jpg';

interface Props {}

const InfoBanner: React.FC<Props> = () => {
  const { state, dispatch } = useContext(Store);

  const resetGame = () => dispatch({ type: 'WON_GAME' });

  return (
    <HeroWrapper>
      <HeroImage />
      {state.usedAnswers.length !== 32 ? (
        <HeroText>{state.message}</HeroText>
      ) : (
        <ResetGameButton onClick={resetGame}>You Won! Play Again?</ResetGameButton>
      )}
    </HeroWrapper>
  );
};

export default InfoBanner;

const HeroWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20vh;
  border-bottom: 3px solid #fff;
`;

const HeroText = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 2;

  color: #fff;
  font-size: 1.05rem;
  line-height: 1.25;
`;

const ResetGameButton = styled.button`
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 2;

  cursor: pointer;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${rounded.inner};
  border: none;
  color: #fff;
  background: ${nflBlue};
  ${transition({ prop: 'background' })};

  &:hover {
    background: ${nflRed};
  }
`;

const HeroImage = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;

  background-color: rgba(0, 0, 0, 0.25);
  background-image: url(${hero});
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;
  height: 100%;
  filter: blur(4px);
`;
