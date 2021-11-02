import { getCV } from '@/cms/data.utils';
import PageWithNav from 'components/navs/PageWithNav';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeExternalLinks from 'rehype-external-links';
import Head from 'next/head';
import CvLayout from 'components/cv/CvLayout';
import { pageContent } from '@/cms/page.content';

const components = {};

const CvPage = ({ source }: any) => {
  return (
    <PageWithNav>
      <Head>
        <title>{pageContent.cv.meta.title}</title>
        <meta name="description" content={pageContent.cv.meta.description} />
      </Head>
      <CvLayout>
        <MDXRemote {...source} components={components} />
      </CvLayout>
    </PageWithNav>
  );
};

export const getStaticProps = async () => {
  const cv = getCV();
  const { content, data } = matter(cv.source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeExternalLinks],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      meta: data,
    },
  };
};

export default CvPage;
