import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import SearchRounded from '@material-ui/icons/SearchRounded';
import { Divider, Typography } from '@material-ui/core';

import React from 'react';

export const SearchIcon = styled(({ ...props }) => (
  <SearchRounded {...props} />
))`
  color: rgba(255, 255, 255, 0.87);
  margin-left: 25px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: rgba(255, 255, 255, 0.5);
    transition: all ease-in-out 0.3s;
  }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    maxWidth: 400,
    overflow: 'auto',
    padding: '1rem',
    maxHeight: '90vh',
  },
  popper: {
    zIndex: 1000,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));

export const Quering = styled(({ ...props }) => <Typography {...props} />)`
  margin: 15px 0;
`;
export const ResultCount = styled.div`
  text-align: right;
`;

export const ResultsLink = styled.a`
  text-decoration: none;
  &:hover h4 {
    color: #eb6383;
    transition: 0.3s all ease-in-out;
  }
`;

export const LineResults = styled(Divider)`
  margin: 15px 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
