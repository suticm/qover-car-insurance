import { IsInt, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CarOfferInputDto {
  @ApiProperty({ example: 25, description: "Driver's age" })
  @IsInt()
  @Min(18, { message: 'Sorry. The driver is too young.' })
  driverAge: number;

  @ApiProperty({
    example: 'Audi',
    description: 'Car manufacturer',
  })
  @IsString()
  carManufacturer: string;

  @ApiProperty({
    example: 5500,
    description: 'Car purchase price',
  })
  @IsInt()
  @Min(5000, { message: 'Sorry! The price of the car is too low!' })
  purchasePrice: number;
}
