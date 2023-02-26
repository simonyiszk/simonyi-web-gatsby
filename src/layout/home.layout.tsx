import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeFooter } from '../components';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>{children}</Box>
      <HomeFooter />
    </>
  );
}

export { HomeLayout };
