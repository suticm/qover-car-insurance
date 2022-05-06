import { IsInt, IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({
    example: 'Renault',
    description: 'Car manufacturer',
  })
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsNumber()
  globalPrice: number;

  @ApiProperty({
    example: 0.3,
    description: 'Universal percentage coefficient',
  })
  @IsNumber()
  universalPercentageCoefficient: number;

  @ApiProperty({
    example: 21,
    minimum: 18,
    description: 'Minimum age restriction of a driver',
  })
  @IsInt()
  @Min(18)
  minAgeRestriction: number;
}
