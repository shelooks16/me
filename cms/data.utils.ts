import fs from 'fs';
import path from 'path';
import { ReadFile } from './data.types';

export function getCV() {
  return readSingleFile('cv.md');
}

export function getArticleBySlug(slug: string) {
  return readSingleFile(`articles/${slug}.md`);
}

export function getArticles() {
  return readFilesInFolder('articles');
}

// ==============

function readFilesInFolder(
  folderPathRelativeToCmsRoot: string,
  fileFilter?: (fileNameWithExt: string) => boolean,
  encoding?: BufferEncoding
): ReadFile[] {
  const fullFolderPath = path.join(
    process.cwd(),
    'cms',
    folderPathRelativeToCmsRoot
  );

  const fileNamesInTargetFolder = fs
    .readdirSync(fullFolderPath)
    .filter(path => (fileFilter ? fileFilter(path) : /\.md?$/.test(path)));

  return fileNamesInTargetFolder.map(fileName =>
    readSingleFile(`${folderPathRelativeToCmsRoot}/${fileName}`, encoding)
  );
}

function readSingleFile(
  pathRelativeToCmsRoot: string,
  encoding?: BufferEncoding
): ReadFile {
  const filePath = path.join(process.cwd(), 'cms', pathRelativeToCmsRoot);
  const fileName = path.basename(filePath);
  const fileNameNoExt = removeMdExtension(fileName);
  const source = fs.readFileSync(filePath, { encoding });

  return {
    source,
    fileName,
    fileNameNoExt,
    filePath,
  };
}

function removeMdExtension(fileName: string) {
  return fileName.replace(/\.md?$/, '');
}
