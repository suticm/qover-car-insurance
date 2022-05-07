import { Car } from 'src/cars/schemas/car.schema';

export const carStub = (): Car => {
  return {
    manufacturer: 'BMW',
    globalPrice: 150,
    universalPercentageCoefficient: 1.3,
    minAgeRestriction: 18,
  };
};
