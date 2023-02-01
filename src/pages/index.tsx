import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Image, Text } from '@chakra-ui/react';
import { HomeLayout } from '../layout';
import { HomeHeader } from '../components/header';
import { ChevronIcon, SimonyiFullLightIcon } from '../components/icons';
import { Profile } from '../components/profile';
import { StudentGroup } from '../components/student-group';
import { about, groups, headlines, images, profiles } from '../utils';

function Greeting() {
  return (
    <Box minHeight="100vh">
      <Box
        zIndex="-1"
        position="absolute"
        top="0"
        left="0"
        bgColor="red"
        width="100%"
        maxWidth="100%"
        height="100vh"
        maxHeight="100%"
        filter="blur(10px)"
        display="flex"
      >
        <Image src="/home-bg/bg-default.png" height="100%" width="100%" objectFit="cover" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
        alignItems="center"
        pb="calc(80px + 2rem)"
      >
        <HomeHeader />
        <Box maxWidth={353} maxHeight={75} m={8}>
          <SimonyiFullLightIcon width="100%" height="100%" filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))" />
        </Box>
        <Box>
          <ChevronIcon fill="light" />
        </Box>
      </Box>
    </Box>
  );
}

function Headlines() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      gap="70px"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      pb="calc(80px + 2rem)"
    >
      {headlines.map((headline, index) => (
        <Box key={index}>
          <Text as="h1" textAlign="center" dangerouslySetInnerHTML={{ __html: headline }} />
        </Box>
      ))}
    </Box>
  );
}

function ImageBrowser() {
  return (
    <Box display="flex" flexWrap={{ md: 'wrap' }} gap="10px" overflowX={{ base: 'scroll', md: 'hidden' }} mx={{ base: -8, md: 0 }}>
      {images.slice(0, 9).map((image, index) => (
        <Box key={index} width="177.05px" height="100px" bgColor="#000000" flexShrink="0">
          <Image src={image.url} alt={image.alt} width="100%" height="100%" />
        </Box>
      ))}
    </Box>
  );
}

function About() {
  return (
    <Box display="flex" flexDirection="column" pb="calc(80px + 2rem)">
      <Text as="h1" mb="32px">
        {about.title}
      </Text>
      <Box
        display="flex"
        gap="70px"
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Box flex={{ base: 'unset', lg: '1 1 0' }}>
          <Text>{about.text}</Text>
        </Box>
        <Box flex={{ base: 'unset', lg: '1 1 0' }} width={{ base: '100%' }} justifyContent="center">
          <ImageBrowser />
        </Box>
      </Box>
    </Box>
  );
}

function Studies() {
  return (
    <Box display="flex" flexDirection="column" gap="32px" pb="calc(80px + 2rem)">
      <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
        <Text as="h1">Köreink</Text>
      </Box>
      <Box
        alignSelf="center"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="32px"
        flexWrap="wrap"
        width="100%"
      >
        {groups.map((group, index) => (
          <StudentGroup key={index} name={group.name} description={group.description} logo={group.logo} socials={group.socials} />
        ))}
      </Box>
    </Box>
  );
}

function Leadership() {
  return (
    <Box display="flex" flexDirection="column" gap="32px" pb="calc(80px + 2rem)">
      <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
        <Text as="h1">Vezetőség</Text>
      </Box>
      <Box
        alignSelf="center"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="32px"
        flexWrap="wrap"
      >
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            profilePicture={profile.profilePicture}
            name={profile.name}
            title={profile.title}
            socials={profile.socials}
          />
        ))}
      </Box>
    </Box>
  );
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <Greeting />
      <Box maxWidth="1496px" mx="auto" p={8}>
        <Headlines />
        <About />
        <Studies />
        <Leadership />
      </Box>
    </HomeLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Simonyi Károly Szakkollégium</title>;
