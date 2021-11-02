import { pageContent } from '@/cms/page.content';
import ScrollToTopBtn from 'components/ScrollToTopBtn';
import BulletsDivider from '../BulletsDivider';
import TwitterShareAnchor from '../TwitterShareAnchor';
import styles from './ArticleLayout.module.css';

type Props = {
  children: React.ReactNode;
  title: string;
  postedOn: string;
};

const ArticleLayout = ({ children, title, postedOn }: Props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.subheader}>Posted on {postedOn}</div>
        <BulletsDivider />
      </div>
      <div className={styles.post}>{children}</div>
      <div className={styles.bottom}>
        <p>
          Written on {postedOn} by {pageContent.nickname}
        </p>
        <ul className={styles.actionBtns}>
          <li>
            <TwitterShareAnchor>
              <button type="button" className="btn-link">
                Share on Twitter 🚀
              </button>
            </TwitterShareAnchor>
          </li>
          <li>
            <ScrollToTopBtn className="btn-action">Back to top</ScrollToTopBtn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleLayout;
