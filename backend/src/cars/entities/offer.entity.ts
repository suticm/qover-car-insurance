export class Offer {
  priceYearly: number;
  priceMonthly: number;
  maximumDurationTravel: number;
  medicalExpensesReimbursement: number;
  personalAssistanceAbroad: number;
  travelAssistanceAbroad: number;
  coverageDuration: number;

  constructor(
    priceYearly: number,
    maximumDurationTravel: number,
    medicalExpensesReimbursement: number,
    personalAssistanceAbroad: number,
    travelAssistanceAbroad: number,
    coverageDuration: number,
  ) {
    this.priceYearly = priceYearly;
    this.priceMonthly = +(priceYearly / 12).toFixed(2);
    this.maximumDurationTravel = maximumDurationTravel;
    this.medicalExpensesReimbursement = medicalExpensesReimbursement;
    this.personalAssistanceAbroad = personalAssistanceAbroad;
    this.travelAssistanceAbroad = travelAssistanceAbroad;
    this.coverageDuration = coverageDuration;
  }
}
