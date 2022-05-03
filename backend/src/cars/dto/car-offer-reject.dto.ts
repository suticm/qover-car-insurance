export class CarOfferRejectDto {
  expectedDriverAge: Number;
  constraint: String;

  constructor(constraint: String, expectedDriverAge: Number) {
    this.constraint = constraint;
    this.expectedDriverAge = expectedDriverAge;
  }
}
