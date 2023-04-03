/* eslint-disable import/prefer-default-export */

import { business } from '../Metadata/site-config';

export const openingHoursSpecification = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: business.dayOfWeek,
  opens: business.opens,
  closes: business.closes,
};
