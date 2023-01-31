import React from 'react';
import { Box, Link, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { ChevronIcon, SocialIcon } from '../icons';
import type { GroupType } from '../../types';

function StudentGroup({ name, logoUrl, description, socials = [] }: GroupType) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false }) as boolean;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isMobile) return;
    setIsOpen(!isOpen);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="16px"
      gap="32px"
      justifyContent="space-between"
      padding="20px"
      bg="darkmode_regular"
      maxWidth={{ base: '100%', md: '330px' }}
    >
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap="32px">
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="32px"
          justifyContent="space-between"
          _hover={{ cursor: 'pointer' }}
          onClick={(e) => handleToggle(e)}
        >
          <Text as="h3">{name}</Text>
          {isMobile && (
            <Box p="8px" transform={isOpen ? 'scaleY(-1)' : 'scaleY(1)'}>
              <ChevronIcon fill={isOpen ? 'simonyi_sarga' : 'simonyi_zold'} />
            </Box>
          )}
        </Box>
        {(!isMobile || isOpen) && (
          <>
            <Box height="100px">
              <Image src={logoUrl} height="100%" />
            </Box>
            <Box>
              <Text>{description}</Text>
            </Box>
          </>
        )}
      </Box>
      {(!isMobile || isOpen) && (
        <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
          {socials.map((social, index) => (
            <Link href={social.url} target="_blank" key={index} px="13px" py="6px" bgColor="simonyi_zold" borderRadius="6px">
              <SocialIcon iconName={social.socialIcon} props={{ boxSize: 4, fill: 'white' }} />
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

export { StudentGroup };
