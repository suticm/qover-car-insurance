import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Restriction } from '../schemas/car.schema';

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

  @ApiProperty()
  restrictions: Restriction[];
}
