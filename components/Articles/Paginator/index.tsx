import React, { ReactElement } from 'react';
import Link from 'next/link';

import { Pagination, PaginationItem } from '@material-ui/lab';
import styled from 'styled-components';

const PostPagigator = styled(({ ...props }) => <Pagination {...props} />)`
  & > ul {
    justify-content: center;
  }
`;

const Paginator = (): ReactElement => {
  const currentPage = 3;
  const postPerPage = 9;
  const totalPosts = 30;
  const numberOfPages = Math.ceil(totalPosts / postPerPage);

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
