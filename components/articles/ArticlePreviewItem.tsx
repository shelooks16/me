import { ArticlePreview } from '@/cms/data.types';
import Link from 'next/link';
import styles from './ArticlePreviewItem.module.css';

type ArticlePreviewItemProps = {
  data: ArticlePreview;
};

const ArticlePreviewItem = ({ data }: ArticlePreviewItemProps) => {
  const { date, description, readingTime, slug, title } = data;

  const combineAndJoinInfo = () => {
    const arr: string[] = [];

    arr.push('📰 ' + date);

    if (readingTime) {
      arr.push('~' + readingTime);
    }

    return arr.join(' | ');
  };

  return (
    <div>
      <div className={styles.infos}>{combineAndJoinInfo()}</div>
      <h3 className={styles.itemTitle}>
        <Link href={`/articles/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ArticlePreviewItem;
