import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import SearchRounded from '@material-ui/icons/SearchRounded';

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

export const quering = styled.div`
  margin: 15px 0;
`;
export const resultCount = styled.div`
  text-align: right;
`;

export const listResults = styled.div`
  & {
    ul {
      padding: 0;

      li {
        list-style: none;
      }
    }
  }
`;

export const resultsLink = styled.div`
  text-decoration: none;
  &:hover h4 {
    color: #eb6383;
    transition: 0.3s all ease-in-out;
  }
`;

export const resultsExcerpt = styled.div`
  font-size: 0.75rem;
`;

export const lineResults = styled.div`
  margin: 15px 0;
`;

export const algoliaLogo = styled.div`
  text-align: right;
  font-size: 0.75rem;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-right: 10px;
  }
  a {
    svg {
      width: 78;
      height: 5;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
