import { CarOfferDto } from '../../cars/dto/car-offer.dto';
import { Car } from '../schemas/car.schema';
import { getGlobalOffer } from './util/global-offer';
import { getUniversalOffer } from './util/universal-offer';

export const getOffer = (car: Car, price: number) =>
  new CarOfferDto(getGlobalOffer(car), getUniversalOffer(car, price));
