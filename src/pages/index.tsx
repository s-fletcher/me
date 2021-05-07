import { Container } from '@chakra-ui/layout'
import { Blobs } from '../components/blobs'
import { Nav } from '../components/nav'
import { About } from '../views/about'

const Index = () => (
  <Container maxW="container.md">
    <Nav />
    <About />
    <Blobs view="about" />
  </Container>
)

export default Index
