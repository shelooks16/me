import styles from './Container.module.css';
import cx from 'classnames';

type Props = {
  className?: string;
  children: any;
};

const Container = ({ children, className }: Props) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

export default Container;
