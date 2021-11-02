import { pageContent } from '@/cms/page.content';
import Link from 'next/link';
import styles from './NotFoundScreen.module.css';

type Props = {
  href?: string;
};

const NotFoundScreen = ({ href = '/' }: Props) => {
  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>{pageContent.notFound.header.title}</h1>
      <p>{pageContent.notFound.header.description}</p>
      <Link href={href}>
        <a>{pageContent.notFound.backToHomeText}</a>
      </Link>
    </div>
  );
};

export default NotFoundScreen;
