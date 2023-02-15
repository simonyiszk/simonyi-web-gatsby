import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

function HomeFooter() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgColor="darkmode_regular" p={8} gap={8}>
      <Box display="flex" gap={8} flexWrap="wrap" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Link href="http://www.bme.hu/" target="_blank">
          <StaticImage src="../../images/bme/bme.png" alt="Logo of BME" height={60} />
        </Link>
        <Link href="http://www.vik.bme.hu/" target="_blank">
          <StaticImage src="../../images/bme/vik.png" alt="Logo of BME" height={60} />
        </Link>
        <Link href="https://svie.hu/" target="_blank">
          <StaticImage src="../../images/bme/schonherz.png" alt="Logo of BME" height={60} />
        </Link>
      </Box>
      <Text align="center">1117 Budapest, Irinyi József utca 42, 13/19</Text>
    </Box>
  );
}

export { HomeFooter };
