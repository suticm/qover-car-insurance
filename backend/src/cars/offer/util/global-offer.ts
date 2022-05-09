import { Car } from '../../schemas/car.schema';
import { carOfferConstants } from '../../../constants';
import { GlobalOffer } from '../../entities/global-offer.entity';

export const getGlobalOffer = (car: Car) =>
  new GlobalOffer(
    +car.globalPrice.toFixed(2),
    carOfferConstants.maximumDurationTravel,
    carOfferConstants.medicalExpensesReimbursement,
    carOfferConstants.personalAssistanceAbroad,
    carOfferConstants.travelAssistanceAbroad,
    carOfferConstants.coverageDuration,
  );
