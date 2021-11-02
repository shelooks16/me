import { pageContent } from '@/cms/page.content';
import Container from 'components/Container';
import Head from 'next/head';
import NotFoundScreen from 'components/NotFoundScreen';

const NotFoundPage = () => {
  return (
    <Container>
      <Head>
        <title>{pageContent.notFound.meta.title}</title>
      </Head>
      <NotFoundScreen />
    </Container>
  );
};

export default NotFoundPage;
