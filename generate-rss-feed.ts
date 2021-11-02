import { Feed, Author } from 'feed';
import fs from 'fs';
import { ArticlePreview } from './cms/data.types';

export const generateRSSFeed = (articles: ArticlePreview[]) => {
  const rssOutput = 'rss.xml';
  const baseUrl = 'https://shelooks16.github.io/me';
  const author: Author = {
    name: 'Andrew Hulenko',
    email: 'blauyedz@zoho.eu',
  };

  const feed = new Feed({
    author,
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    title: 'Articles by shelooks16',
    copyright: 'Andrew Hulenko',
    description:
      'Read articles about web technologies written by Andrew Hulenko (shelooks16)',
    feedLinks: {
      rss2: `${baseUrl}/${rssOutput}`,
    },
  });

  articles.forEach(a => {
    const { slug, date, description, title } = a;
    const url = `${baseUrl}/articles/${slug}`;

    feed.addItem({
      title,
      description,
      id: url,
      link: url,
      author: [author],
      date: new Date(date),
    });
  });

  fs.writeFileSync(`public/${rssOutput}`, feed.rss2());
};
