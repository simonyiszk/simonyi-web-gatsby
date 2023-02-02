type SocialIconType = 'email' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'phone' | 'youtube' | 'website';

type AboutType = {
  title: string;
  text: string;
};

type ImageType = {
  url: string;
  alt: string;
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

type GroupType = {
  name: string;
  logo: ImageType;
  description: string;
  socials: SocialType[];
};

export { AboutType, ImageType, ProfileType, GroupType, SocialIconType, SocialType };
