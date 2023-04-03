/* eslint-disable import/prefer-default-export */

import { siteName, siteUrl, contact, business } from '../Metadata/site-config';
import { address } from './_address';
import { geo } from './_geo';
import { openingHoursSpecification } from './_openingHoursSpecification';
import { reviews } from '../Metadata/reviews';

export const attorney = [
  {
    '@context': 'http://schema.org',
    '@type': 'Attorney',
    name: siteName,
    address,
    geo,
    openingHoursSpecification,
    priceRange: business.priceRange,
    review: reviews,
    telephone: contact.telephone,
    url: siteUrl,
  },
];
