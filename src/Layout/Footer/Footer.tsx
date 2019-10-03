import React from 'react';
import styled from 'styled-components';

interface Props {}

const Footer: React.FC<Props> = () => {
  return <Wrapper>footer</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: auto;
`;
