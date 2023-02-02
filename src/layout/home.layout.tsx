import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeFooter } from '../components/footer';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>{children}</Box>
      <HomeFooter />
    </>
  );
}

export { HomeLayout };
