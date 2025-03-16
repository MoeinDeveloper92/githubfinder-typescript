import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto  overflow-y-auto">{children}</div>;
};

export default Container;
