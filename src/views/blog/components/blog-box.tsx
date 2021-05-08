import { Image } from '@chakra-ui/image';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/layout';

export const BlogBox = () => (
  <Box boxShadow="card" borderRadius="lg" mt={40} bg="white" py={8} px={8}>
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
        bg="linear-gradient(#62F9FF7F, #1697FF7F)"
      >
        <Image p={4} maxH="100%" src="/images/blog/react-cover.png" />
      </Box>
      <Stack direction="column" justifyContent="space-between">
        <Stack direction="column" spacing={3}>
          <Heading size="md">Creating a React App for Beginners</Heading>
          <Text>
            This is a guide to creating your first app with React! In this
            walkthrough will have you building an application in React from
            scratch and learning some cool tools that come with it.
          </Text>
        </Stack>
        <Link
          color="inherit"
          w="fit-content"
          alignSelf="flex-end"
          target="_blank"
          href="https://github.com/Hacklahoma/guides/blob/react/README.md"
        >
          <Heading p={2} m={0} textDecoration="underline" size="sm">
            Read
          </Heading>
        </Link>
      </Stack>
    </Stack>
  </Box>
);
