import styles from './Section.module.css';

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
