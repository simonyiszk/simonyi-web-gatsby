import React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { Box, Button, Image, Link, Text } from '@chakra-ui/react';
import { HomeLayout } from '../layout';
import { HomeHeader } from '../components/header';
import { ChevronIcon, SimonyiFullLightIcon } from '../components/icons';
import { Profile } from '../components/profile';
import { StudentGroup } from '../components/student-group';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { about, groups, images, profiles } from '../utils';
import { SEO } from '../components/seo';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { AboutType, ProfileType, StudentGroupType } from '../types';

function Greeting() {
  return (
    <Box minHeight="100vh">
      <Box
        zIndex="-1"
        position="absolute"
        top="0"
        left="0"
        bgColor="black"
        width="100%"
        maxWidth="100%"
        height="100vh"
        maxHeight="100%"
        filter="blur(10px)"
        display="flex"
      >
        <StaticImage
          src="../images/hero/default.png"
          alt="Hero image"
          objectFit="cover"
          style={{ height: '100%', width: '100%' }}
          placeholder="none"
          loading="eager"
        />
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
        <Box display="flex" gap={8} flexDirection="column">
          <Box maxWidth={353} maxHeight={75} m={8}>
            <SimonyiFullLightIcon width="100%" height="100%" filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))" />
          </Box>
          <Box display="flex" gap={8} flexWrap="wrap" flexDirection="row" justifyContent="space-evenly">
            <Link href="https://tanfolyam.simonyi.bme.hu/" title="tanfolyam.simonyi.bme.hu" target="_blank">
              <Button bgColor="simonyi_zold" width={32}>
                Bérlés
              </Button>
            </Link>
            <Link href="https://termek.sch.bme.hu/" title="termek.sch.bme.hu" target="_blank">
              <Button bgColor="simonyi_zold" width={32}>
                Tanfolyam
              </Button>
            </Link>
          </Box>
        </Box>
        <Box>
          <ChevronIcon fill="light" />
        </Box>
      </Box>
    </Box>
  );
}

function ImageBrowser({ imagesData }: { imagesData: { images: typeof images } }) {
  const [index, setIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const openLightbox = (index = 0) => {
    setIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <Box
      display="flex"
      flexWrap={{ md: 'wrap' }}
      gap="10px"
      overflowX={{ base: 'scroll', md: 'hidden' }}
      mx={{ base: -8, md: 0 }}
      justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-end' }}
    >
      {imagesData.images.slice(0, 9).map((image, index) => (
        <Box
          key={index}
          width="177.05px"
          height="100px"
          bgColor="#000000"
          flexShrink="0"
          onClick={() => openLightbox(index)}
          _hover={{ cursor: 'pointer' }}
        >
          {image.gatsbyImageData ? (
            <GatsbyImage image={image.gatsbyImageData} alt={image.alt} style={{ height: '100%', width: '100%' }} />
          ) : (
            <Image src={image.url} alt={image.alt} width="100%" height="100%" />
          )}
        </Box>
      ))}
      <Lightbox
        open={isOpen}
        slides={imagesData.images.map((image) => {
          return {
            src: image.gatsbyImageOriginalUrl ? image.gatsbyImageOriginalUrl : image.url,
            alt: image.alt,
            title: image.title,
            description: image.description,
            width: image.width,
            height: image.height
          };
        })}
        index={index}
        close={() => closeLightbox()}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </Box>
  );
}

function About({ aboutData, imagesData }: { aboutData: { about: AboutType }; imagesData: { images: typeof images } }) {
  return (
    <Box display="flex" flexDirection="column">
      <Text as="h1" mb="32px">
        {aboutData.about.title}
      </Text>
      <Box display="grid" gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="4rem">
        <Text>{aboutData.about.text}</Text>
        <ImageBrowser imagesData={imagesData} />
      </Box>
    </Box>
  );
}

function StudentGroups({ studentGroupsData }: { studentGroupsData: { groups: Array<StudentGroupType> } }) {
  return (
    <Box display="flex" flexDirection="column" gap="32px">
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
        {studentGroupsData.groups.map((group, index) => (
          <StudentGroup key={index} name={group.name} description={group.description} logo={group.logo} socials={group.socials} />
        ))}
      </Box>
    </Box>
  );
}

function Presidency({ presidencyData }: { presidencyData: { profiles: Array<ProfileType> } }) {
  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
        <Text as="h1">Elnökség</Text>
      </Box>
      <Box alignSelf="center" display="flex" justifyContent="center" flexDirection="row" gap="2rem" flexWrap="wrap" width="100%">
        {presidencyData.profiles.map((profile, index) => (
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

const IndexPage = ({ data }: PageProps<Queries.homePageQuery>) => {
  const aboutData = { about };
  const imagesData = {
    images: images.map((image) => {
      return {
        ...image,
        gatsbyImageOriginalUrl:
          data.lightbox.edges.find((edge) => {
            return `images/${edge.node.relativePath}` === image.url;
          })?.node.childImageSharp?.original?.src || undefined,
        gatsbyImageData: data.lightbox.edges.find((edge) => {
          return `images/${edge.node.relativePath}` === image.url;
        })?.node.childImageSharp?.gatsbyImageData
      };
    })
  };
  const studentGroupsData = { groups };
  const presidencyData = {
    profiles: profiles.map((profile) => {
      return {
        ...profile,
        profilePicture: {
          ...profile.profilePicture,
          gatsbyImageData: data.simonyi_elnokok.edges.find((edge) => {
            return `images/${edge.node.relativePath}` === profile.profilePicture.url;
          })?.node.childImageSharp?.gatsbyImageData
        }
      };
    })
  };

  return (
    <HomeLayout>
      <Greeting />
      <Box maxWidth="1496px" mx="auto" p={8} display="flex" flexDirection="column" gap="calc(80px + 2rem)" pb="calc(80px + 2rem)">
        <Box />
        <About aboutData={aboutData} imagesData={imagesData} />
        <StudentGroups studentGroupsData={studentGroupsData} />
        <Presidency presidencyData={presidencyData} />
      </Box>
    </HomeLayout>
  );
};

export const query = graphql`
  query homePage {
    simonyi_elnokok: allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "simonyi/elnokok" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    lightbox: allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "lightbox" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            original {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Főoldal" themeColor="#231F20" />;
