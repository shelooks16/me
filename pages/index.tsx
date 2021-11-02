import Head from 'next/head';
import { pageContent } from '@/cms/page.content';
import PageWithNav from 'components/navs/PageWithNav';
import { GetStaticProps } from 'next';
import { getArticles } from '@/cms/data.utils';
import { ArticlePreview } from '@/cms/data.types';
import matter from 'gray-matter';
import estimateReadTime from 'read-time-estimate';
import Section from 'components/Section';
import ArticlePreviewList from 'components/articles/ArticlePreviewList';
import { generateRSSFeed } from '../generate-rss-feed';

type HomePageProps = {
  articles: ArticlePreview[];
};

export default function Home({ articles }: HomePageProps) {
  return (
    <PageWithNav>
      <Head>
        <title>{pageContent.home.meta.title}</title>
        <meta name="description" content={pageContent.home.meta.description} />
      </Head>

      <Section title={pageContent.home.articles.title}>
        <ArticlePreviewList articles={articles} />
      </Section>
    </PageWithNav>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const avgReadingWPM = 300;
  const avgImageReadingTime_sec = 12;
  const avgAsiaReadingWPM = 500;

  const rawArticles = getArticles();

  const articles = await Promise.all(
    rawArticles.map(async file => {
      const { data, content } = matter(file.source);
      const readTime = estimateReadTime(
        content,
        avgReadingWPM,
        avgImageReadingTime_sec,
        avgAsiaReadingWPM,
        ['img', 'Image']
      );

      const preview: ArticlePreview = {
        slug: file.fileNameNoExt,
        title: data.title,
        description: data.description || '',
        date: data.date.toISOString().slice(0, 10),
        readingTime: readTime.humanizedDuration,
      };

      return preview;
    })
  );

  generateRSSFeed(articles);

  return {
    props: {
      articles,
    },
  };
};
