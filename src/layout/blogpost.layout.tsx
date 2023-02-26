import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeFooter } from '../components';

function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>{children}</Box>
      <HomeFooter />
    </>
  );
}

export { BlogPostLayout };
