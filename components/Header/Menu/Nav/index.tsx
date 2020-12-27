import React from 'react';
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
          <nav>
            <ul>
              <NavLi>
                <Link href="/" passHref>
                  <NavLink className="hvr-underline-from-center">
                    Trang chủ
                  </NavLink>
                </Link>
              </NavLi>
              {categories.map((category: any, index: number) => (
                <NavLi key={index}>
                  <Link href={`/categories/${category.fields.slug}`} passHref>
                    <NavLink className="hvr-underline-from-center">
                      {category.fields.title}
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

export default Nav;
