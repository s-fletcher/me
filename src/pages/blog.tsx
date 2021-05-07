import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import { Blobs } from '../components/blobs';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav';
import { Blog } from '../views/blog';

const BlogPage = () => (
  <Container maxW="container.md">
    <Head>
      <title>Blog • Sam</title>
    </Head>
    <Nav />
    <Blog />
    <Blobs view="work" />
    <Footer />
  </Container>
);

export default BlogPage;
