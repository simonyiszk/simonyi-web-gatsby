import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import type { ProfileType } from '../../types';
import { SocialIcon } from '../icons';

function Profile({ name, title, profilePicture, socials }: ProfileType) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="darkmode_regular"
      borderRadius="16px"
      padding="16px"
      gap="16px"
      maxWidth="300px"
    >
      <Image
        src={profilePicture.url}
        alt={profilePicture.alt}
        width="200px"
        height="200px"
        borderRadius="50%"
        borderStyle="solid"
        borderWidth={2}
        borderColor="simonyi_zold"
      />
      <Text as="h2">{name}</Text>
      <Text fontSize="20px" fontWeight="regular">
        {title}
      </Text>
      <Box display="flex" justifyContent="center" gap="28px" mt="28px" flexWrap="wrap">
        {socials.map((social, index) => (
          <Link href={social.link.url} title={social.link.title} target="_blank" key={index}>
            <SocialIcon iconName={social.icon} props={{ boxSize: '24px', fill: 'simonyi_zold' }} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export { Profile };
