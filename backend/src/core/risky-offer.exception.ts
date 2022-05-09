import { BadRequestException } from '@nestjs/common';

export class RiskyOfferException extends BadRequestException {
  constructor() {
    super('Sorry! We can not accept this particular risk.', '400');
  }
}
