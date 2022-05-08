export class CarDto {
  id: string;
  manufacturer: string;
  globalPrice: number;
  universalPercentageCoefficient: number;
  minAgeRestriction: number;

  constructor(
    id: string,
    manufacturer: string,
    globalPrice: number,
    universalPercentageCoefficient: number,
    minAgeRestriction: number,
  ) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.globalPrice = globalPrice;
    this.universalPercentageCoefficient = universalPercentageCoefficient;
    this.minAgeRestriction = minAgeRestriction;
  }
}
