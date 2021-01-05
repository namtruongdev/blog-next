import React, { useRef, useState } from 'react';
import { withRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { isEqual } from 'lodash';
import qs from 'qs';
import algoliasearch from 'algoliasearch/lite';
import { findResultsState } from 'react-instantsearch-dom/server';

import { SearchIcon, useStyles, quering, SearchContainer } from './styles';

import {
  Popper,
  Paper,
  ClickAwayListener,
  Typography,
} from '@material-ui/core';

import Input from './input';
import SearchResult from './SearchResult';
import process from 'process';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
);

const updateAfter = 700;

const createURL = (state: any) => `?${qs.stringify(state)}`;

const pathToSearchState = (path: any) =>
  path.includes('?') ? qs.parse(path.substring(path.indexOf('?') + 1)) : {};

const searchStateToURL = (searchState: any) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : '';

const DEFAULT_PROPS = {
  searchClient,
  indexName: 'Postss',
};
const Search = ({ resultsState, searchState, router }: any) => {
  const [searchStateRouter, setSearchStateRouter] = useState<any>({
    searchState: searchState,
    lastRouter: router,
  });
  const anchorRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement>();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const id = open ? 'scroll-playground' : undefined;

  const classes = useStyles();

  const onSearchStateChange = (searchState: any) => {
    clearTimeout(searchState.debouncedSetState);

    searchState.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      searchState.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    setSearchStateRouter({ searchState });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SearchContainer>
        <SearchIcon
          ref={anchorRef}
          onClick={handleClickButton}
          aria-describedby={id}
        />

        <Popper
          id={id}
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-end"
          disablePortal={false}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
            arrow: {
              enabled: true,
              element: arrowRef,
            },
          }}
        >
          {/* <span className={classes.arrow} ref={setArrowRef} /> */}
          <Paper className={classes.paper}>
            {/* <InstantSearch searchClient={searchClient} indexName="Posts">
              <Configure hitsPerPage={5} distinct />
              <Input />
              <Results>
                <SearchResult {...DEFAULT_PROPS}
                  searchState={searchStateRouter.searchState}
                  resultsState={searchStateRouter.resultsState}
                  onSearchStateChange={onSearchStateChange}
                  createURL={createURL}
                />
              </Results>
            </InstantSearch> */}
          </Paper>
        </Popper>
      </SearchContainer>
    </ClickAwayListener>
  );
};

export const getStaticProps: GetStaticProps = async ({ asPath }: any) => {
  const searchState = pathToSearchState(asPath);
  const resultsState = await findResultsState(SearchResult, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    props: {
      resultsState,
      searchState,
      asPath,
    },
  };
};

export default withRouter(Search);
