import React, { useEffect } from 'react';
import { getAllPost, getAllSlug } from '../utils';
const Test = () => {
  useEffect(() => {
    const fetchAllPost = async () => {
      const data = await getAllSlug();

      console.log(data);
    };
    fetchAllPost();
  }, []);
  return <div>test</div>;
};

export default Test;
