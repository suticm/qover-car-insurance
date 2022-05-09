import { Restriction } from '../../schemas/car.schema';
import { maxAgeValidator } from './max-age.validator';
import { minAgeValidator } from './min-age.validator';

export function RestrictionFactory(restriction: Restriction) {
  switch (restriction.name) {
    case 'minAge':
      return minAgeValidator.bind(restriction);
    case 'maxAge':
      return maxAgeValidator.bind(restriction);
    default:
      return () => true;
  }
}
