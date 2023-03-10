import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { graphql, HeadFC, Link as GatsbyLink, PageProps } from 'gatsby';
import React from 'react';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import { SEO } from '../components';
import { SubpageLayout } from '../layout/subpage.layout';
import { BlogPostType } from '../types';

export const PostEntry: React.FC<{ post: BlogPostType & BlogPostFields }> = ({ post: { title, date, slug } }) => {
  return (
    <HStack my={2} fontSize="lg">
      <Text>&#128221; {new Date(date).toLocaleDateString()} &bull;</Text>
      <Link as={GatsbyLink} to={slug}>
        {title} &raquo;
      </Link>
    </HStack>
  );
};

type BlogPostFields = {
  slug: string;
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

const ArchivePage: React.FC<PageProps<BlogQuery>> = ({ data }) => {
  const posts = data.allMdx.nodes.map((node) => ({ ...node.frontmatter, ...node.fields, id: node.id }));

  return (
    <SubpageLayout>
      <Box maxWidth="1496px" mx="auto" p={8}>
        <Heading mb={8}>Archívum</Heading>
        <Flex justify="end" mb={8}>
          <Link as={GatsbyLink} to="/blog" fontSize="lg">
            Vissza a bloghoz
          </Link>
        </Flex>
        {posts.map((post) => (
          <PostEntry key={post.id} post={post} />
        ))}
      </Box>
    </SubpageLayout>
  );
};

export default ArchivePage;

export const Head: HeadFC = () => <SEO title="Archívum" />;

export const query = graphql`
  query ArchiveQuery {
    allMdx(filter: { frontmatter: { layout: { eq: "blog" } } }, sort: { frontmatter: { date: ASC } }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`;
