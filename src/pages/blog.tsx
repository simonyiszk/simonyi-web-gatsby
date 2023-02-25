import React from 'react';
import { Box, chakra, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { ClockIcon } from '../components/icons';
import { SEO } from '../components/seo';
import { SubpageLayout } from '../layout/subpage.layout';
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
            <Link to={slug}>
              {image ? <GatsbyImage image={image} alt="Blog preview" objectFit="contain" /> : <Image src="../../post-default.jpg" />}
            </Link>
          </Box>
          <Box zIndex={1} w="100%" h="100%" position="absolute" ml={1} mt={1}>
            <Box bgGradient="radial(orange.400 1px, transparent 1px)" bgSize={{ base: '1.5rem 1.5rem', sm: '1rem 1rem' }} h="100%" />
          </Box>
        </Flex>
        <Flex flex={2.15} direction="column" justifyContent="center" mt={{ base: 3, sm: 0 }} pl={{ base: 0, sm: 3 }}>
          <Heading as={Link} fontSize="2xl" fontWeight="400" lineHeight="tight" to={slug}>
            {title}
          </Heading>
          <Box mt={1} fontWeight="light" textColor={useColorModeValue('gray.600', 'gray.400')}>
            <Box display="inline-block" pr={1}>
              <ClockIcon />
            </Box>
            <chakra.span fontSize="sm">
              {minutes}&nbsp;perc{lead ? ` • ${lead}` : ''}
            </chakra.span>
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} h="fit-content" direction="column" justifyContent="flex-end">
        <Flex justifyContent="space-between" direction={{ base: 'column', sm: 'row' }} flexWrap="wrap" pt={4}>
          <Text fontWeight="light" fontSize="md" textColor={useColorModeValue('gray.600', 'gray.400')}>
            {date.toLocaleTimeString('hu-HU', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
        </Flex>
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
      fields: BlogPostFields;
      frontmatter: BlogPostType;
    }[];
  };
};

const BlogPage: React.FC<PageProps<BlogQuery>> = ({ data }) => {
  const posts = data.allMdx.nodes.map((node) => ({ ...node.frontmatter, ...node.fields }));

  return (
    <SubpageLayout>
      <Box maxWidth="1496px" mx="auto" p={8}>
        {posts.map((post) => (
          <BlogPreviewCard key={post.title} post={post} />
        ))}
      </Box>
    </SubpageLayout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <SEO title="Blog" />;

export const query = graphql`
  query BlogQuery {
    allMdx(filter: { frontmatter: { layout: { eq: "blog" } } }) {
      nodes {
        fields {
          slug
          timeToRead {
            minutes
            text
            time
            words
          }
        }
        frontmatter {
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          layout
          lead
          title
        }
      }
    }
  }
`;
