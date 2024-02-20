import Icon from '@chakra-ui/icon';
import { Box, Link } from '@chakra-ui/layout';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaAt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

type FooterItemProps = {
  icon: IconType;
  href: string;
};

const FooterItem: FC<FooterItemProps> = ({ icon, href }) => (
  <Link mx={5} target="_blank" href={href}>
    <Icon m={2} color="orange.100" w={7} h={7} as={icon} />
  </Link>
);

export const Footer = () => (
  <Box display="flex" justifyContent="center" m={14}>
    <FooterItem href="mailto:sam@samfletcher.me (Sam Fletcher)" icon={FaAt} />
    <FooterItem
      href="https://www.linkedin.com/in/sfletchertx/"
      icon={FaLinkedinIn}
    />
    <FooterItem
      href="https://www.instagram.com/samfletcher.me/"
      icon={FaInstagram}
    />
  </Box>
);
