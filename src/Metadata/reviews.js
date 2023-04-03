export const reviews = [
  {
    '@context': 'http://schema.org/',
    '@type': 'Review',
    reviewBody: 'The restaurant has great ambiance.',
    itemReviewed: {
      '@type': 'Restaurant',
      name: 'Fine Dining Establishment',
    },
    author: {
      '@type': 'Organization',
      name: `Comapny Name`,
    },
    datePublished: '2011-04-01',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      worstRating: 1,
      bestRating: 5,
      reviewAspect: 'Ambiance',
    },
  },
  {
    '@context': 'http://schema.org/',
    '@type': 'Review',
    reviewBody: 'The restaurant has great ambiance.',
    itemReviewed: {
      '@type': 'Restaurant',
      name: 'Fine Dining Establishment',
    },
    author: {
      '@type': 'Person',
      name: `Person Name`,
    },
    datePublished: '2011-04-01',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      worstRating: 1,
      bestRating: 5,
      reviewAspect: 'Ambiance',
    },
  },
];

export const aggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: '4',
  reviewCount: '250',
};
