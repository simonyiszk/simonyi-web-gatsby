import React from 'react';
import { Box } from '@chakra-ui/react';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return <Box>{children}</Box>;
}

export { HomeLayout };
