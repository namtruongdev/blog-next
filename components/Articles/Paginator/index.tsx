import React, { ReactElement, memo } from 'react';

import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

const PostPagigator = styled(({ ...props }) => <Pagination {...props} />)`
  & > ul {
    justify-content: center;
  }
`;

const Paginator = ({
  currentPage,
  limit,
  total,
  setPage,
}: {
  currentPage: number;
  limit: number;
  total: number;
  setPage: Function;
}): ReactElement => {
  const numberOfPages = Math.ceil(total / limit);

  return (
    <PostPagigator
      color="secondary"
      page={currentPage}
      count={numberOfPages}
      onChange={(_e: any, page: number) => {
        setPage(page * limit - limit);
      }}
    ></PostPagigator>
  );
};

export default memo(Paginator);
