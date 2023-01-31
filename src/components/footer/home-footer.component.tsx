import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BMEIcon, SchonherzIcon, VIKIcon } from '../icons';

function HomeFooter() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgColor="darkmode_regular" p={8} gap={8}>
      <Box display="flex" gap={8} flexWrap="wrap">
        <BMEIcon w="10.5rem" h="3.75rem" fill="light" />
        <VIKIcon w="3.75rem" h="3.75rem" fill="light" />
        <SchonherzIcon w="10.5rem" h="3.75rem" fill="light" />
      </Box>
      <Text>1117 Budapest, Irinyi József utca 42, 13/19</Text>
    </Box>
  );
}

export { HomeFooter };
