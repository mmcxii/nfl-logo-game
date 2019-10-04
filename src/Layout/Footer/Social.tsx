import React from 'react';
import styled from 'styled-components';

import { spacing, transition, nflBlue, nflRed } from 'Utilities';

interface Props {}

const Social: React.FC<Props> = () => {
  const socials: { name: string; link: string; icon: string }[] = [
    {
      name: 'portfolio',
      link: 'https://www.secord.io',
      icon: 'fas fa-browser',
    },
    {
      name: 'github',
      link: 'https://www.github.com/mmcxii',
      icon: 'fab fa-github',
    },
    {
      name: 'linked in',
      link: 'https://www.linkedin.com/in/mmcxii',
      icon: 'fab fa-linkedin-in',
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com/mmcxii__',
      icon: 'fab fa-twitter',
    },
  ];

  return (
    <List>
      {socials.map(item => (
        <Item key={item.name}>
          <Link href={item.link}>
            <Icon className={item.icon} />
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default Social;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Item = styled.li`
  margin: 0 ${spacing.sm};
`;

const Link = styled.a.attrs({ target: 'blank' })`
  text-decoration: none;
  color: ${nflBlue};
`;

const Icon = styled.i`
  font-size: 1.75rem;
  text-align: center;
  ${transition({ prop: 'color' })};

  &:hover {
    color: ${nflRed};
  }
`;
