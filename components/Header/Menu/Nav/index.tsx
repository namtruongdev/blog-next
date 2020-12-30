import React, { memo } from 'react';
import Link from 'next/link';

import { NavContainer, NavFlex, NavLi, NavLink } from './styles';

import Hidden from '@material-ui/core/Hidden';
// import Search from '../Search';

type Props = {
  categories: object[];
};

const Nav = ({ categories }: Props) => {
  return (
    <NavContainer maxWidth="lg">
      <NavFlex>
        <Hidden mdUp>
          <Link href="/" passHref>
            <NavLink className="hvr-underline-from-center">Trang chủ</NavLink>
          </Link>
        </Hidden>
        <Hidden smDown>
          <nav id="navigation">
            <ul>
              <NavLi>
                <Link href="/" passHref>
                  <NavLink className="hvr-underline-from-center">
                    Trang chủ
                  </NavLink>
                </Link>
              </NavLi>
              {categories.map((category: any) => (
                <NavLi key={category.id}>
                  <Link href={`/categories/${category.slug}`} passHref>
                    <NavLink className="hvr-underline-from-center">
                      {category.title}
                    </NavLink>
                  </Link>
                </NavLi>
              ))}
            </ul>
          </nav>
        </Hidden>
        {/* <Search /> */}
      </NavFlex>
    </NavContainer>
  );
};

export default memo(Nav);
