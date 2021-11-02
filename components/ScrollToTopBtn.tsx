type Props = {
  className?: string;
  children: React.ReactNode;
};

const ScrollToTopBtn = ({ className, children }: Props) => {
  const onScrollTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={className}
      onClick={onScrollTopClick}
      title="Click to go up"
    >
      {children}
    </button>
  );
};

export default ScrollToTopBtn;
