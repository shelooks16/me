import styles from './BulletsDivider.module.css';
import cx from 'classnames';

type Props = {
  className?: string;
};

const BulletsDivider = ({ className }: Props) => {
  return <div className={cx(styles.bullets, className)}>●●●</div>;
};

export default BulletsDivider;
