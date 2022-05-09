import { CarOfferType } from './CarOfferType';

export interface OfferType {
  globalOffer: CarOfferType;
  universalOffer: CarOfferType;
  constraint: string;
  expectedDriverAge: number;
}
