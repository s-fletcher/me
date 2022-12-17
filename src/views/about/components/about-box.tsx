import { Box, Heading, Link, Text } from '@chakra-ui/layout';

export const AboutBox = () => (
  <Box
    boxShadow="card"
    borderRadius="lg"
    mt={40}
    bg="white"
    py={10}
    px={[8, 10, 20]}
  >
    <Heading size="lg">About</Heading>
    <Text my={4}>
      I&apos;m a Software Engineer with over three years of experience currently
      working in Oklahoma City. Please take a look around my website, it&apos;s
      the very best way to learn more about me.
    </Text>
    <Text>
      View my{' '}
      <Link target="_blank" href="/resume.pdf">
        resume
      </Link>
    </Text>
  </Box>
);
