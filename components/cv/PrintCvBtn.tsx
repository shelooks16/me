import React from 'react';
import PrintBtn from '../PrintBtn';
import styles from './PrintCvBtn.module.css';

type Props = {
  content: () => React.ReactInstance | null;
};

const PrintCvBtn = ({ content }: Props) => {
  return (
    <PrintBtn
      print={{
        content,
        bodyClass: styles.printFrameBody,
      }}
      className="btn-action"
    >
      Print CV
    </PrintBtn>
  );
};

export default PrintCvBtn;
