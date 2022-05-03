export class Offer {
  price: Number;
  maximumDurationTravel: Number;
  medicalexpensesReimbursement: Number;
  personalAssistanceAbroad: Number;
  travelAssistanceAbroad: Number;
  coverageDuration: Number;

  constructor(
    price: Number,
    maximumDurationTravel: Number,
    medicalexpensesReimbursement: Number,
    personalAssistanceAbroad: Number,
    travelAssistanceAbroad: Number,
    coverageDuration: Number,
  ) {
    this.price = price;
    this.maximumDurationTravel = maximumDurationTravel;
    this.medicalexpensesReimbursement = medicalexpensesReimbursement;
    this.personalAssistanceAbroad = personalAssistanceAbroad;
    this.travelAssistanceAbroad = travelAssistanceAbroad;
    this.coverageDuration = coverageDuration;
  }
}
