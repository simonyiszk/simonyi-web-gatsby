import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { HomeFooter, SubpageHeader } from '../components';

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
