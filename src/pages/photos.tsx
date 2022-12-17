import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import { Blobs } from '../components/blobs';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav';
import { Photos } from '../views/photos';

const BlogPage = () => (
  <Container maxW="container.md">
    <Head>
      <title>Photos • Sam</title>
    </Head>
    <Nav />
    <Photos />
    <Blobs view="work" />
    <Footer />
  </Container>
);

export default BlogPage;
