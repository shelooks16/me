import styles from './ArticlePreviewList.module.css';
import { ArticlePreview } from '@/cms/data.types';
import ArticlePreviewItem from './ArticlePreviewItem';

type Props = {
  articles: ArticlePreview[];
};

const ArticlePreviewList = ({ articles }: Props) => {
  return (
    <ul className={styles.list}>
      {articles.map(a => (
        <li key={a.slug}>
          <ArticlePreviewItem data={a} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlePreviewList;
