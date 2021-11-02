import styles from './Nav.module.css';
import Link from 'next/link';
import { pageContent } from '@/cms/page.content';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.title}>{pageContent.navbar.title}</a>
      </Link>
      <div className={styles.links}>
        {pageContent.navbar.links.map(({ href, text, ...anchorProps }) => (
          <div key={href} className={styles.linkItem}>
            <Link href={href}>
              <a {...anchorProps}>{text}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
