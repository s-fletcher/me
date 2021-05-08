import { Image } from '@chakra-ui/image';
import { FC } from 'react';

type BlobsProps = {
  view: 'about' | 'work' | 'blog';
};

/**
 * TODO:
 * - Rotate blobs based on view
 */
export const Blobs: FC<BlobsProps> = () => (
  <>
    <Image
      width={['170px', '280px', '280px', '380px']}
      zIndex={-1}
      pos="absolute"
      top={['-80px', '-150px', '-150px', '-200px']}
      left={['-30px', '-60px']}
      src="/images/blob1.png"
    />
    <Image
      width={['170px', '260px', '260px', '360px']}
      zIndex={-1}
      pos="absolute"
      top={['-120px', '-190px', '-190px', '-260px']}
      left={['-20px', '-40px', '-40px', '-60px']}
      src="/images/blob2.png"
    />
    <Image
      width={['170px', '295px', '295px', '400px']}
      zIndex={-1}
      pos="absolute"
      top={['150px', '150px', '150px', '150px']}
      right={['-40px', '-80px', '-80px', '-120px']}
      src="/images/blob3.png"
    />
    <Image
      width={['170px', '300px', '300px', '400px']}
      zIndex={-1}
      pos="absolute"
      top={['110px', '110px', '110px', '110px']}
      right={['-70px', '-140px', '-140px', '-200px']}
      src="/images/blob4.png"
    />
  </>
);
