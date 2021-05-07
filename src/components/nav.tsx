import { Button } from '@chakra-ui/button'
import { Box, Heading, Text } from '@chakra-ui/layout'

export const Nav = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    pos="absolute"
    left={0}
    top={0}
    w="100vw"
    px={8}
    py={4}
    alignItems="center"
  >
    <Heading size="lg">Sam</Heading>
    <Box
      fontFamily="heading"
      fontSize={18}
      display="flex"
      justifyContent="space-between"
    >
      <Button pr={2} pl={2} mx={2} variant="unstyled">
        about
      </Button>
      <Button pr={2} pl={2} mx={2} variant="unstyled" opacity={0.5}>
        work
      </Button>
      <Button pr={2} pl={2} mx={2} variant="unstyled" opacity={0.5}>
        blog
      </Button>
    </Box>
  </Box>
)
