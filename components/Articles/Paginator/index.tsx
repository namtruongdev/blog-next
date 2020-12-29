import React, { ReactElement } from 'react';
import Link from 'next/link';

import { Pagination, PaginationItem } from '@material-ui/lab';
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
}: {
  currentPage: number;
  limit: number;
  total: number;
}): ReactElement => {
  const numberOfPages = Math.ceil(total / limit);

  return (
    <PostPagigator
      color="secondary"
      page={currentPage}
      count={numberOfPages}
      renderItem={(item: any) => (
        <Link
          href={`${item.page === 1 ? '/' : `/trang-${item.page}`}`}
          passHref
        >
          <PaginationItem component="a" {...item} />
        </Link>
      )}
    ></PostPagigator>
  );
};

export default Paginator;
