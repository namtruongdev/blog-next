import React from 'react';

import Hero from './Hero';
import Mouse from './Mouse';
import Nav from './Menu/Nav';

type Props = {
  strings: [string, string];
  categories: object[];
};

const Header = ({ strings, categories }: Props) => {
  return (
    <header>
      <Nav categories={categories} />
      <Hero strings={strings} />
      <Mouse />
    </header>
  );
};

export default Header;
