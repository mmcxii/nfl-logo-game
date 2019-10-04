import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import { Container } from 'Layout';
import Social from './Social';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <Byline>Nich Secord &copy; 2019</Byline>

        <Social />
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: auto;
  background: #fff;
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.md};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Byline = styled.p`
  text-transform: capitalize;
  font-style: italic;
  margin-bottom: ${spacing.sm};
`;
