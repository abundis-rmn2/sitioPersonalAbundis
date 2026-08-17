import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

const NetworkGraphComponent = dynamic(
  () => import('./NetworkGraphComponent'),
  { ssr: false }
);

const NetworkGraph = forwardRef((props, ref) => {
  return <NetworkGraphComponent {...props} ref={ref} />;
});

NetworkGraph.displayName = 'NetworkGraph';

export default NetworkGraph;
