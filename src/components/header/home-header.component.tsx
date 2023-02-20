import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

function HomeHeader() {
  return (
    <Box display="flex" columnGap={16} rowGap={8} justifyContent="center" alignItems="center" flexWrap="wrap" p={8}>
      <Link href="http://www.bme.hu/" target="_blank">
        <StaticImage src="../../images/bme/bme.png" alt="Logo of BME" height={50} />
      </Link>
      <Link href="http://www.vik.bme.hu/" target="_blank">
        <StaticImage src="../../images/bme/vik.png" alt="Logo of BME" height={50} />
      </Link>
      <Link href="https://svie.hu/" target="_blank" width={{ base: 'auto', md: '188px' }}>
        <StaticImage src="../../images/bme/schonherz.png" alt="Logo of BME" height={50} />
      </Link>
    </Box>
  );
}

export { HomeHeader };
