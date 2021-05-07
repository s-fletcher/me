import { Container } from '@chakra-ui/layout'
import { Blobs } from '../components/blobs'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'
import { Blog } from '../views/blog'

const BlogPage = () => (
  <Container maxW="container.md">
    <Nav />
    <Blog />
    <Blobs view="work" />
    <Footer />
  </Container>
)

export default BlogPage
