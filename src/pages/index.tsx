import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { chakra, Code, Heading, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Heading>
        Congratulations
        <br />
        <chakra.span>— you just made a Gatsby site! 🎉🎉🎉</chakra.span>
      </Heading>
      <Text>
        Edit <Code>src/pages/index.tsx</Code> to see this page update in real-time. 😎
      </Text>
      <StaticImage alt="Gatsby G Logo" src="../images/simonyi-simple-512.png" />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
