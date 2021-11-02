import dynamic from 'next/dynamic';
import { useRef } from 'react';
import styles from './CvLayout.module.css';

const PrintCvBtn = dynamic(() => import('./PrintCvBtn'));

type Props = {
  children: React.ReactNode;
};

const CvLayout = ({ children }: Props) => {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={cvRef} className={styles.cv}>
        {children}
      </div>
      <div className={styles.bottom}>
        <PrintCvBtn content={() => cvRef.current} />
      </div>
    </div>
  );
};

export default CvLayout;
