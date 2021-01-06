import React, { useState, MouseEvent, useCallback, useMemo } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { withInstantSearch } from 'next-instantsearch';
import {
  Configure,
  Highlight,
  Hits,
  Pagination,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-dom';

import { SearchIcon, useStyles, SearchContainer } from './styles';

import { Popper, Paper, ClickAwayListener, Fade } from '@material-ui/core';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
);

const HitComponent = ({ hit }: any) => <Highlight attribute="" hit={hit} />;

const DEFAULT_PROPS = {
  searchClient,
  indexName: 'Postss',
};
const Search = () => {
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
                  <Configure hitsPerPage={12} />
                  <SearchBox />
                  <RefinementList attribute="" />
                  <Hits hitComponent={HitComponent} />
                  <Pagination />
                </Paper>
              </>
            </Fade>
          )}
        </Popper>
      </SearchContainer>
    </ClickAwayListener>
  );
};

export default withInstantSearch(DEFAULT_PROPS)(Search);
