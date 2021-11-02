import { IReactToPrintProps, useReactToPrint } from 'react-to-print';

type Props = {
  className?: string;
  children?: React.ReactNode;
  print: IReactToPrintProps;
};

const PrintBtn = ({ print, children, ...btnProps }: Props) => {
  const handlePrint = useReactToPrint(print);

  return (
    <button {...btnProps} onClick={handlePrint}>
      {children}
    </button>
  );
};

export default PrintBtn;
