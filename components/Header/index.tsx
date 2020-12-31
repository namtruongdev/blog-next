import React, { memo } from 'react';

import Hero from './Hero';
import Mouse from './Mouse';
import Nav from './Menu/Nav';

type Props = {
  strings: [string, string];
  categories: object[];
  setPage: Function;
};

const Header = ({ strings, categories, setPage }: Props) => {
  return (
    <header>
      <Nav categories={categories} setPage={setPage} />
      <Hero strings={strings} />
      <Mouse />
    </header>
  );
};

export default memo(Header);
