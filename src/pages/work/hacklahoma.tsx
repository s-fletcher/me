import { Container } from '@chakra-ui/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';
import { Hacklahoma } from '../../views/work/hacklahoma';

const WorkPage: NextPage = () => (
  <Container maxW="container.md">
    <Head>
      <title>Hacklahoma • Sam</title>
    </Head>
    <Nav />
    <Hacklahoma />
    <Footer />
  </Container>
);

export default WorkPage;
