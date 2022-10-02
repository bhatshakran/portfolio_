import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='max-w-4xl mx-auto'>{children}</div>;
};

export default Container;
