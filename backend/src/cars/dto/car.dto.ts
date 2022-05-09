import { Restriction } from '../schemas/car.schema';

export class CarDto {
  id: string;
  manufacturer: string;
  globalPrice: number;
  universalPercentageCoefficient: number;
  restrictions: Restriction[];

  constructor(
    id: string,
    manufacturer: string,
    globalPrice: number,
    universalPercentageCoefficient: number,
    restrictions: Restriction[],
  ) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.globalPrice = globalPrice;
    this.universalPercentageCoefficient = universalPercentageCoefficient;
    this.restrictions = restrictions;
  }
}
