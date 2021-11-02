/* eslint-disable import/no-anonymous-default-export */

const isBuildForGhPages = process.env.DEPLOY_TARGET === 'ghpages';
const ghPagesSubPath = '/me';
const ghPagesCdnPrefix = '/me';

export default {
  reactStrictMode: true,
  basePath: isBuildForGhPages ? ghPagesSubPath : '',
  assetPrefix: isBuildForGhPages ? ghPagesCdnPrefix : '',
  publicRuntimeConfig: {
    assetPrefix: isBuildForGhPages ? ghPagesCdnPrefix : '',
  },
};
