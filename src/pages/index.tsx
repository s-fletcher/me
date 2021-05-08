import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import { Blobs } from '../components/blobs';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav';
import { About } from '../views/about';

const AboutPage = () => (
  <Container maxW="container.md">
    <Head>
      <title>Sam Fletcher</title>
    </Head>
    <Nav />
    <About />
    <Blobs view="about" />
    <Footer />
  </Container>
);

export default AboutPage;
