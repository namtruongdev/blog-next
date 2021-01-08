import React, { useState, MouseEvent, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { SearchIcon, useStyles, SearchContainer, Quering } from './styles';

import {
  Popper,
  Paper,
  ClickAwayListener,
  Fade,
  TextField,
} from '@material-ui/core';

const Results = dynamic(() => import('./Results'));

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
  const [query, setQuery] = useState<string>('');

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
                  <TextField
                    type="search"
                    fullWidth
                    className="SearchInput"
                    id="standard-secondary"
                    label="Tìm kiếm"
                    color="secondary"
                    aria-label="Tìm kiếm"
                    onKeyUp={(e: any) =>
                      setTimeout(() => setQuery(e.target.value), 700)
                    }
                  />
                  <Results query={query} />
                </Paper>
              </>
            </Fade>
          )}
        </Popper>
      </SearchContainer>
    </ClickAwayListener>
  );
};

export default Search;
