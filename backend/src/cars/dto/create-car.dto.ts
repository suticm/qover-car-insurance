import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CreateCarDto {
  @IsString()
  manufacturer: string;

  @IsNumber()
  globalPrice: number;

  @IsNumber()
  universalPercentageCoefficient: number;

  @IsInt()
  @Min(18)
  minAgeRestriction: number;
}
