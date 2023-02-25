import React from 'react';
import { Box, HStack, Link, VStack } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { SimonyiFullLightIcon } from '../icons';

function SubpageHeader() {
  return (
    <Box
      display="flex"
      columnGap={16}
      rowGap={8}
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      bgColor="darkmode_regular"
      p={8}
    >
      <SimonyiFullLightIcon width="10em" height="100%" />
      <HStack>
        <GatsbyLink to="/">
          <Link>Kezdőlap</Link>
        </GatsbyLink>
      </HStack>
    </Box>
  );
}

export { SubpageHeader };
