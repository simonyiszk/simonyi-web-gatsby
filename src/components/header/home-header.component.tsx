import React from 'react';
import { Box } from '@chakra-ui/react';
import { BMEIcon, SchonherzIcon, VIKIcon } from '../icons';
import { Link } from 'gatsby';

function HomeHeader() {
  return (
    <Box display="flex" columnGap={16} rowGap={8} justifyContent="center" alignItems="center" flexWrap="wrap" p={8}>
      <Link to="https://svie.hu/" target="_blank">
        <Box maxWidth={121.88} maxHeight={48.75}>
          <SchonherzIcon width="100%" height="auto" fill="light" />
        </Box>
      </Link>
      <Link to="http://www.vik.bme.hu/" target="_blank">
        <Box maxWidth={48.75} maxHeight={48.75}>
          <VIKIcon width="100%" height="auto" fill="light" />
        </Box>
      </Link>
      <Link to="http://www.bme.hu/" target="_blank">
        <Box maxWidth={142.71} maxHeight={57.08}>
          <BMEIcon width="100%" height="auto" fill="light" />
        </Box>
      </Link>
    </Box>
  );
}

export { HomeHeader };
