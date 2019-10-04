import styled from 'styled-components';

import { rounded, spacing } from 'Utilities';

export const LogoButton = styled.button<{ primaryColor: string; secondaryColor: string; textColor: string }>`
  cursor: pointer;
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  padding: ${spacing.sm} ${spacing.md};
  margin: ${spacing.md};
  border-radius: ${rounded.outter};
  font-weight: bolder;
  text-transform: capitalize;
  max-width: 250px;

  color: ${props => props.textColor};
  background: ${props => props.primaryColor};
  border: 3px solid ${props => props.secondaryColor};
  transition: transform ease-in 250ms;

  &:hover {
    transform: scale(1.03);
  }

  > img {
    border-radius: ${rounded.inner};
    padding: ${spacing.xs};
    background: #fff;
    margin-bottom: ${spacing.sm};
  }
`;
