import { GatsbyNode } from 'gatsby';
import readingTime from 'reading-time';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string)
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
