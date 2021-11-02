export type ReadFile = {
  source: string | Buffer;
  fileName: string;
  fileNameNoExt: string;
  filePath: string;
};

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
};

export type ArticlePreview = {
  slug: string;
  title: string;
  readingTime: string;
  description: string;
  date: string;
};
