import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { BMEIcon, SchonherzIcon, VIKIcon } from '../icons';

function HomeFooter() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgColor="darkmode_regular" p={8} gap={8}>
      <Box display="flex" gap={8} flexWrap="wrap" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Link href="http://www.bme.hu/" target="_blank">
          <BMEIcon w="10.5rem" h="3.75rem" fill="light" />
        </Link>
        <Link href="http://www.vik.bme.hu/" target="_blank">
          <VIKIcon w="3.75rem" h="3.75rem" fill="light" />
        </Link>
        <Link href="https://svie.hu/" target="_blank">
          <SchonherzIcon w="10.5rem" h="3.75rem" fill="light" />
        </Link>
      </Box>
      <Text>1117 Budapest, Irinyi József utca 42, 13/19</Text>
    </Box>
  );
}

export { HomeFooter };
