import { IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
type SocialIconType = 'email' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'phone' | 'youtube' | 'tiktok' | 'website';

type AboutType = {
  title: string;
  text: string;
  wikiUrl: string;
};

type ImageType = {
  url: string;
  alt: string;
  gatsbyImageOriginalUrl?: string;
  gatsbyImageData?: IGatsbyImageData;
};

type LinkType = {
  url: string;
  title: string;
  text: string;
};

type SocialType = {
  icon: SocialIconType;
  link: LinkType;
};

type ProfileType = {
  profilePicture: ImageType;
  name: string;
  title: string;
  socials: SocialType[];
};

type StudentGroupType = {
  name: string;
  logo: ImageType;
  description: string;
  socials: SocialType[];
  isDense?: boolean;
};

type BlogPostType = {
  layout: 'blog';
  date: string;
  title: string;
  lead: string;
  featuredImage: ImageDataLike;
  ogImage: ImageDataLike;
};

export { AboutType, ImageType, ProfileType, StudentGroupType, SocialIconType, SocialType, BlogPostType };
