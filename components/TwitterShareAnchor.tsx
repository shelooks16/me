import { useEffect, useState } from 'react';

function useLocationHref() {
  const [url, setUrl] = useState('/');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return url;
}

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

const TwitterShareAnchor = ({
  children,
  title = 'Share on Twitter',
  className,
}: Props) => {
  const url = useLocationHref();

  return (
    <a
      href={`https://twitter.com/intent/tweet?url=${url}&text=&via=&hashtags=`}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={className}
    >
      {children}
    </a>
  );
};

export default TwitterShareAnchor;
