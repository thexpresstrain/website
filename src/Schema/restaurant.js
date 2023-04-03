/* eslint-disable import/prefer-default-export */

import { geo } from './_geo';
import { reviews, aggregateRating } from '../Metadata/reviews';
import { openingHoursSpecification } from './_openingHoursSpecification';
import { hasMenu, servesCuisine } from '../Metadata/menu';
import { address } from './_address';
import { siteName, siteUrl, contact, business } from '../Metadata/site-config';

export const restaurant = [
  {
    '@context': 'http://schema.org',
    '@type': 'Restaurant',
    address,
    aggregateRating,
    name: siteName,
    openingHoursSpecification,
    priceRange: business.priceRange,
    servesCuisine,
    telephone: contact.telephone,
    url: siteUrl,
    geo,
    review: reviews,
    hasMenu,
  },
];
