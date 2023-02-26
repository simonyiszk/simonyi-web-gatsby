import { Box, Flex, Grid, Heading, HStack, Image, Link, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { graphql, HeadFC, Link as GatsbyLink, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { ClockIcon } from '../components/icons';
import { SEO } from '../components/seo';
import { SubpageLayout } from '../layout';
import { BlogPostType } from '../types';

export const BlogPreviewCard: React.FC<{ post: BlogPostType & BlogPostFields }> = ({
  post: {
    featuredImage,
    title,
    lead,
    date,
    timeToRead: { minutes },
    slug
  }
}) => {
  const image = getImage(featuredImage || null);

  return (
    <Flex mt={2} direction="column">
      <Flex direction={{ base: 'column', sm: 'row' }} justifyContent="space-between">
        <Flex flex={1} position="relative" mr={{ base: 0, sm: 2 }} pb={{ base: 2, sm: 0 }}>
          <Box w="85%" zIndex={2}>
            <GatsbyLink to={slug}>
              {image ? <GatsbyImage image={image} alt="Blog preview" objectFit="contain" /> : <Image src="../../post-default.jpg" />}
            </GatsbyLink>
          </Box>
          <Box zIndex={1} w="100%" h="100%" position="absolute" ml={1} mt={1}>
            <Box bgGradient="radial(simonyi_sarga 1px, transparent 1px)" bgSize={{ base: '1.5rem 1.5rem', sm: '1rem 1rem' }} h="100%" />
          </Box>
        </Flex>
        <Flex flex={2.15} direction="column" justifyContent="center" mt={{ base: 3, sm: 0 }} pl={{ base: 0, sm: 3 }}>
          <Heading as={Link} fontSize="2xl" fontWeight="400" lineHeight="tight" to={slug}>
            {title}
          </Heading>
          <Box mt={1} fontWeight="light" textColor="simonyi_zold_halvany">
            {lead}
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} h="fit-content" direction="column" justifyContent="flex-end">
        <HStack justify="space-between" flexWrap="wrap" pt={4}>
          <Box>
            {new Date(date).toLocaleTimeString('hu-HU', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Box>
          <HStack>
            <ClockIcon fill="currentColor" />
            <Text>{Math.floor(minutes) + 1}&nbsp;perc</Text>
          </HStack>
        </HStack>
      </Flex>
    </Flex>
  );
};

type BlogPostFields = {
  slug: string;
  timeToRead: {
    minutes: number;
  };
};

type BlogQuery = {
  allMdx: {
    nodes: {
      id: string;
      fields: BlogPostFields;
      frontmatter: BlogPostType;
    }[];
  };
};

const BlogPage: React.FC<PageProps<BlogQuery>> = ({ data }) => {
  const posts = data.allMdx.nodes.map((node) => ({ ...node.frontmatter, ...node.fields, id: node.id }));
  const numberOfCols = useBreakpointValue({ base: 1, md: 2 });

  return (
    <SubpageLayout>
      <Box maxWidth="1496px" mx="auto" p={8}>
        <Heading mb={16}>Blogposztjaink</Heading>
        <Grid templateColumns={`repeat(${numberOfCols}, 1fr)`} gap={{ base: 24, sm: 10 }}>
          {posts.map((post) => (
            <BlogPreviewCard key={post.id} post={post} />
          ))}
        </Grid>
        <Box textAlign="right" mt={16}>
          <Link as={GatsbyLink} fontSize="lg" to="/archive">
            Még több...
          </Link>
        </Box>
      </Box>
    </SubpageLayout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <SEO title="Blog" />;

export const query = graphql`
  query BlogQuery {
    allMdx(filter: { frontmatter: { layout: { eq: "blog" } } }, limit: 4, sort: { frontmatter: { date: ASC } }) {
      nodes {
        id
        fields {
          slug
          timeToRead {
            minutes
          }
        }
        frontmatter {
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          lead
          title
        }
      }
    }
  }
`;
