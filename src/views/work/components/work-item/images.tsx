import { Image } from '@chakra-ui/image';
import { Box, HStack, Link } from '@chakra-ui/layout';
import { FC } from 'react';

const IMAGE_PATH = '/images/work/hacklahoma';

type LinkWrapperProps = {
  href?: string;
};

const LinkWrapper: FC<LinkWrapperProps> = ({ children, href }) => {
  if (href) {
    return (
      <Link target="_blank" _hover={{ filter: 'brightness(90%)' }} href={href}>
        {children}
      </Link>
    );
  }
  return <Box>{children}</Box>;
};

type WorkItemImageProps = {
  file: string;
  href?: string;
};

export const WorkItemImage: FC<WorkItemImageProps> = ({ file, href }) => (
  <LinkWrapper href={href}>
    <Image src={`${IMAGE_PATH}/${file}`} shadow="card" borderRadius="lg" />
  </LinkWrapper>
);

type WorkItemImageStackProps = {
  files: string[];
  href?: string | string[];
};

export const WorkItemImageStack: FC<WorkItemImageStackProps> = ({
  files,
  href,
}) => (
  <HStack maxW="100%">
    <LinkWrapper href={typeof href === 'object' ? href[0] : href}>
      <Image
        src={`${IMAGE_PATH}/${files[0]}`}
        shadow="card"
        borderRadius="lg"
      />
    </LinkWrapper>
    <LinkWrapper href={typeof href === 'object' ? href[1] : href}>
      <Image
        src={`${IMAGE_PATH}/${files[1]}`}
        shadow="card"
        borderRadius="lg"
      />
    </LinkWrapper>
  </HStack>
);
