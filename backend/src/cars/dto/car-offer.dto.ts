import { UniversalOffer } from '../types/universal-offer.type';
import { GlobalOffer } from '../types/global-offer.type';

export class CarOffer {
  globalOffer: GlobalOffer;
  universalOffer: UniversalOffer;

  constructor(globalOffer: GlobalOffer, universalOffer: UniversalOffer) {
    this.globalOffer = globalOffer;
    this.universalOffer = universalOffer;
  }
}
