import { Image } from '@chakra-ui/image';
import { FC } from 'react';

type BlobsProps = {
  view: 'about' | 'work' | 'blog';
};

export const Blobs: FC<BlobsProps> = ({ view }) => (
  <>
    <Image
      zIndex={-1}
      pos="absolute"
      top="-150px"
      left="-60px"
      src="/images/blob1.png"
    />
    <Image
      zIndex={-1}
      pos="absolute"
      top="-190px"
      left="-40px"
      src="/images/blob2.png"
    />
    <Image
      zIndex={-1}
      pos="absolute"
      top="150px"
      right="-80px"
      src="/images/blob3.png"
    />
    <Image
      zIndex={-1}
      pos="absolute"
      top="110px"
      right="-140px"
      src="/images/blob4.png"
    />
  </>
);
