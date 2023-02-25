import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { HomeFooter } from '../components/footer';
import { SubpageHeader } from '../components/header';

function SubpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <SubpageHeader />
      <Box flex={1}>{children}</Box>
      <HomeFooter />
    </Flex>
  );
}

export { SubpageLayout };
