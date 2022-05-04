import { UniversalOffer } from '../entities/universal-offer.entity';
import { GlobalOffer } from '../entities/global-offer.entity';

export class CarOfferDto {
  globalOffer: GlobalOffer;
  universalOffer: UniversalOffer;

  constructor(globalOffer: GlobalOffer, universalOffer: UniversalOffer) {
    this.globalOffer = globalOffer;
    this.universalOffer = universalOffer;
  }
}
