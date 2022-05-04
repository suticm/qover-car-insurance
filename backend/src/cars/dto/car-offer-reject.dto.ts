export class CarOfferRejectDto {
  expectedDriverAge: number;
  constraint: string;

  constructor(constraint: string, expectedDriverAge?: number) {
    this.constraint = constraint;
    this.expectedDriverAge = expectedDriverAge;
  }
}
