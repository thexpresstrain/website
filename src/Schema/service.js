/* eslint-disable import/prefer-default-export */

import { siteName, siteUrl, contact, business } from '../Metadata/site-config';
import { address } from './_address';
import { geo } from './_geo';
import { reviews } from '../Metadata/reviews';
import { openingHoursSpecification } from './_openingHoursSpecification';

export const service = [
  {
    '@context': 'http://schema.org/',
    '@type': 'Service',
    serviceType: business.serviceType, // User defined type
    provider: {
      '@type': 'LocalBusiness',
      name: siteName,
      address,
      openingHoursSpecification,
      priceRange: business.priceRange,
      geo,
      review: reviews,
      telephone: contact.telephone,
      url: siteUrl,
    },
  },
];
