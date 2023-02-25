import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          themeColor
          title
          titleTemplate
          description
          image
          siteUrl
          ogType
          ogImageType
          ogImageWidth
          ogImageHeight
          twitterCard
          twitterImageAlt
          twitterSite
          twitterCreator
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
