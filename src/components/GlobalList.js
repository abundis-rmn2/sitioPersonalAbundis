import React, { forwardRef } from 'react';
import { cvPosts } from '../data/cvData';
import NetworkGraph from './NetworkGraph';

const GlobalList = forwardRef((props, ref) => {
  return <NetworkGraph ref={ref} posts={cvPosts} {...props} />;
});

GlobalList.displayName = 'GlobalList';

export default GlobalList;
