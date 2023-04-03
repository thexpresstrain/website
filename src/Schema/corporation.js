/* eslint-disable import/prefer-default-export */

import { siteName, siteUrl, remoteAssetLogo } from '../Metadata/site-config';
import { address } from './_address';
import { reviews } from '../Metadata/reviews';

export const corporation = [
  {
    '@context': 'http://schema.org/',
    '@type': 'Corporation',
    address,
    legalName: siteName,
    url: siteUrl,
    review: reviews,
    brand: {
      '@context': 'http://schema.org/',
      '@type': 'Brand',
      logo: remoteAssetLogo,
    },
  },
];
