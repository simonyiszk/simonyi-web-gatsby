type SocialIconType = 'email' | 'facebook' | 'instagram' | 'linkedin' | 'phone' | 'youtube' | 'website';

type AboutType = {
  title: string;
  text: string;
};

type ImageType = {
  url: string;
  alt: string;
};

type SocialType = {
  socialIcon: SocialIconType;
  url: string;
};

type ProfileType = {
  profilePictureUrl: string;
  name: string;
  title: string;
  socials: SocialType[];
};

type GroupType = {
  name: string;
  logoUrl: string;
  description: string;
  socials: SocialType[];
};

export { AboutType, ImageType, ProfileType, GroupType, SocialIconType, SocialType };
