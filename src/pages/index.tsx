import { Container } from '@chakra-ui/layout';
import { Blobs } from '../components/blobs';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav';
import { About } from '../views/about';

const AboutPage = () => (
  <Container maxW="container.md">
    <Nav />
    <About />
    <Blobs view="about" />
    <Footer />
  </Container>
);

export default AboutPage;
