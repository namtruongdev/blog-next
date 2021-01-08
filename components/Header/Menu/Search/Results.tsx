import React from 'react';
import useSWR from 'swr';

import { getAllPost } from '@/utils/';

type Props = {
  query: string;
};

const Results = ({ query }: Props) => {
  const { data } = useSWR(
    [skip],
    (skip) => getAllPost({ limit: 9, skip: skip }),
    { refreshInterval: 1000 }
  );
  console.log(query);

  return <div>test</div>;
};

export default Results;
