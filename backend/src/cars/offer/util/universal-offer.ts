import { UniversalOffer } from '../../entities/universal-offer.entity';
import { carOfferConstants } from '../../../constants';
import { calculateUniversalOfferPrice } from '../calculators/universal-price.calc';
import { Car } from 'src/cars/schemas/car.schema';

export const getUniversalOffer = (car: Car, purchasePrice: number) =>
  new UniversalOffer(
    calculateUniversalOfferPrice(
      car.globalPrice,
      car.universalPercentageCoefficient,
      purchasePrice,
    ),
    carOfferConstants.maximumDurationTravel,
    carOfferConstants.medicalExpensesReimbursement,
    carOfferConstants.personalAssistanceAbroad,
    carOfferConstants.travelAssistanceAbroad,
    carOfferConstants.coverageDuration,
  );
