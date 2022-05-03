import { IsInt, IsString, Min } from 'class-validator';

export class CarOfferInputDto {
  @IsInt()
  @Min(18, { message: 'Sorry. The driver is too young.' })
  driverAge: number;

  @IsString()
  carManufacturer: string;

  @IsInt()
  @Min(5000, { message: 'Sorry! The price of the car is too low!' })
  purchasePrice: number;
}
