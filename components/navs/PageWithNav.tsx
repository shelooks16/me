import Container from '../Container';
import Nav from './Nav';
import styles from './PageWithNav.module.css';

type PageWithNavProps = {
  children: React.ReactNode;
};

const PageWithNav = ({ children }: PageWithNavProps) => {
  return (
    <Container>
      <Nav />
      <main className={styles.main}>{children}</main>
    </Container>
  );
};

export default PageWithNav;
