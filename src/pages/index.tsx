import { Box, Container, Heading, Link, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

const Home = () => {
  const [isSmallDevice] = useMediaQuery('(max-width: 640px)')

  return (
    <Container maxW="container.md" mt={28} centerContent>
      <Box>
        <Heading fontWeight="normal" fontSize="3xl" fontFamily="mono">
          Hello world,
        </Heading>
        <Heading fontSize="4xl" mt={2} ml={24}>
          I&apos;m Sam
        </Heading>
      </Box>
      <Box
        boxShadow="card"
        borderRadius="lg"
        mt={40}
        bg="white"
        py={10}
        px={isSmallDevice ? 10 : 20}
      >
        <Heading size="lg">About</Heading>
        <Text my={4}>
          I&apos;m a Computer Science student at the University of Oklahoma
          currently working an entry level Software Engineering position in
          Oklahoma City. Unlike my coding skills, you could say I&apos;m a
          terrible cook... but I try.
        </Text>
        <Text>
          View my{' '}
          <Link target="_blank" href="/resume.pdf">
            resume
          </Link>
        </Text>
      </Box>
    </Container>
  )
}
export default Home
