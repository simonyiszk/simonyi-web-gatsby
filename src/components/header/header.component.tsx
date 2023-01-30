import React from 'react';
import { Box } from '@chakra-ui/react';
import { BMEIcon, SchonherzIcon, VIKIcon } from '../icons';

function Header() {
  return (
    <Box>
      <Box display="flex" columnGap={16} rowGap={8} padding={8} justifyContent="center" alignItems="center" flexWrap="wrap">
        <BMEIcon width={121} height={38} fill="light" />
        <VIKIcon width={38} height={38} fill="light" />
        <SchonherzIcon width={121} height={38} fill="light" />
      </Box>
    </Box>
  );
}

export { Header };
