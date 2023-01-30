import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { EmailIcon, FacebookIcon, GlobeIcon, InstagramIcon, LinkedInIcon, PhoneIcon, YouTubeIcon } from '../icons';
import { SocialIconType } from '../../types';

function SocialIcon({ iconName, props }: { iconName: string; props?: IconProps }) {
  switch (iconName.toLocaleLowerCase() as SocialIconType) {
    case 'email':
      return <Icon as={EmailIcon} {...props} />;
    case 'facebook':
      return <Icon as={FacebookIcon} {...props} />;
    case 'instagram':
      return <Icon as={InstagramIcon} {...props} />;
    case 'linkedin':
      return <Icon as={LinkedInIcon} {...props} />;
    case 'phone':
      return <Icon as={PhoneIcon} {...props} />;
    case 'youtube':
      return <Icon as={YouTubeIcon} {...props} />;
    default:
      return <Icon as={GlobeIcon} {...props} />;
  }
}

export { SocialIcon };
