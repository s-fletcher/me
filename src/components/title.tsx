import { Box, Container, ContainerProps, Heading } from '@chakra-ui/layout'
import { FC } from 'react'

type TitleProps = ContainerProps & {
  lineOne: string
  lineTwo: string
}

export const Title: FC<TitleProps> = ({ lineOne, lineTwo, ...props }) => (
  <Container {...props} maxW="container.md" centerContent>
    <Box mt={32}>
      <Heading fontWeight="normal" fontSize="3xl" fontFamily="mono">
        {lineOne}
      </Heading>
      <Heading fontSize="4xl" mt={2} ml={24}>
        {lineTwo}
      </Heading>
    </Box>
  </Container>
)
