export class Offer {
  priceYearly: number;
  priceMonthly: number;
  maximumDurationTravel: number;
  medicalexpensesReimbursement: number;
  personalAssistanceAbroad: number;
  travelAssistanceAbroad: number;
  coverageDuration: number;

  constructor(
    priceYearly: number,
    maximumDurationTravel: number,
    medicalexpensesReimbursement: number,
    personalAssistanceAbroad: number,
    travelAssistanceAbroad: number,
    coverageDuration: number,
  ) {
    this.priceYearly = priceYearly;
    this.priceMonthly = +(priceYearly / 12).toFixed(2);
    this.maximumDurationTravel = maximumDurationTravel;
    this.medicalexpensesReimbursement = medicalexpensesReimbursement;
    this.personalAssistanceAbroad = personalAssistanceAbroad;
    this.travelAssistanceAbroad = travelAssistanceAbroad;
    this.coverageDuration = coverageDuration;
  }
}
