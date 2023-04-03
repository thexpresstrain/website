/* eslint-disable import/prefer-default-export */

import { contact } from '../Metadata/site-config';

export const address = {
  '@type': 'PostalAddress',
  streetAddress: contact.address.streetAddress,
  addressLocality: contact.address.addressLocality,
  addressRegion: contact.address.addressRegion,
  postalCode: contact.address.postalCode,
  addressCountry: contact.address.addressCountry,
};
