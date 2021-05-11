import { Image } from '@chakra-ui/image';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { FC } from 'react';

type BlogBoxProps = {
  title: string;
  href: string;
  image: string;
  bg: string;
};

export const BlogBox: FC<BlogBoxProps> = ({
  children,
  title,
  href,
  image,
  bg,
}) => (
  <Box boxShadow="card" borderRadius="lg" mt={40} bg="white" py={[8, 6]} px={6}>
    <Stack direction={['column', 'row']} spacing={8} alignItems="stretch">
      <Box
        h={48}
        w="100%"
        minW={48}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pos="relative"
        borderRadius="lg"
        bg={bg}
      >
        <Image maxH="calc(100% - 1em)" src={`/images/blog/${image}`} />
      </Box>
      <Stack direction="column" justifyContent="space-between">
        <Stack direction="column" spacing={3}>
          <Heading size="md">{title}</Heading>
          <Text>{children}</Text>
        </Stack>
        <Link
          color="inherit"
          w="fit-content"
          alignSelf="flex-end"
          target="_blank"
          href={href}
        >
          <Heading p={2} m={0} textDecoration="underline" size="sm">
            Read
          </Heading>
        </Link>
      </Stack>
    </Stack>
  </Box>
);
