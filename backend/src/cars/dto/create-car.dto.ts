import { IsBoolean, IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CreateCarDto {
  @IsString()
  manufacturer: string;

  @IsNumber()
  globalPrice: number;

  @IsNumber()
  universalPrice: number;

  @IsInt()
  @Min(18)
  ageRestriction: number;

  @IsBoolean()
  highRisk: boolean;
}
