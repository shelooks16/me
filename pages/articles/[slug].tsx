import { getArticles, getArticleBySlug } from '@/cms/data.utils';
import PageWithNav from 'components/navs/PageWithNav';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import Head from 'next/head';
import ArticleLayout from 'components/articles/ArticleLayout';
import { ArticleMeta } from '@/cms/data.types';

const components = {};

type PageProps = {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
};

export default function ArticlePage({ source, meta }: PageProps) {
  return (
    <PageWithNav>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <ArticleLayout title={meta.title} postedOn={meta.date}>
        <MDXRemote {...source} components={components} />
      </ArticleLayout>
    </PageWithNav>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const article = getArticleBySlug(params!.slug as string);
  const mt = matter(article.source);
  const meta = {
    ...mt.data,
    date: mt.data.date.toISOString().slice(0, 10),
  } as ArticleMeta;

  const mdxSource = await serialize(mt.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            content: {
              type: 'element',
              tagName: 'span',
              children: [{ type: 'text', value: '#' }],
              properties: {
                className: ['heading-link'],
                title: 'Click to anchor this title',
              },
            },
          },
        ],
        rehypeExternalLinks,
      ],
    },
    scope: meta,
  });

  return {
    props: {
      meta,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles().map(file => ({
    params: { slug: file.fileNameNoExt },
  }));

  return {
    paths,
    fallback: false,
  };
};
