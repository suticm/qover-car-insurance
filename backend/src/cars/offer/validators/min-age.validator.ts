import { RiskyOfferException } from '../../../core/risky-offer.exception';
import { CarOfferInputDto } from '../../dto/car-offer-input.dto';

export function minAgeValidator(carOfferInputDto: CarOfferInputDto) {
  if (carOfferInputDto.driverAge < this.value) {
    throw new RiskyOfferException();
  }
}
