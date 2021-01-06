import React, { useState, MouseEvent, useCallback, useMemo } from 'react';
import { withRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { isEqual } from 'lodash';
import qs from 'qs';
import algoliasearch from 'algoliasearch/lite';
import { findResultsState } from 'react-instantsearch-dom/server';

import { SearchIcon, useStyles, SearchContainer } from './styles';

import { Popper, Paper, ClickAwayListener, Fade } from '@material-ui/core';

import SearchResult from './SearchResult';

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
const Search = ({ resultsState, searchState, router, asPath }: any) => {
  const [searchStateRouter, setSearchStateRouter] = useState<any>({
    searchState: searchState,
    lastRouter: router,
  });

  console.log(asPath);

  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [open, setOpen] = useState<boolean>(false);

  const handleClickButton = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prevOpen) => !prevOpen);
    },
    [anchorEl, open]
  );

  const handleClickAway = useCallback(() => {
    setOpen(false);
  }, []);

  const id = useMemo(() => (open ? 'scroll-playground' : undefined), [open]);

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
        <SearchIcon onClick={handleClickButton} aria-describedby={id} />

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
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
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <>
                <span className={classes.arrow} ref={setArrowRef} />
                <Paper className={classes.paper}>
                  <SearchResult
                    {...DEFAULT_PROPS}
                    searchState={searchStateRouter.searchState}
                    resultsState={resultsState}
                    onSearchStateChange={onSearchStateChange}
                    createURL={createURL}
                  />
                </Paper>
              </>
            </Fade>
          )}
        </Popper>
      </SearchContainer>
    </ClickAwayListener>
  );
};

export const getServerSideProps = async ({ asPath }: any) => {
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
