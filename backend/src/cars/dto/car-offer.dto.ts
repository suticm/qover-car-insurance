import { IsInt, IsString, Min } from 'class-validator';

export class CarOfferDto {
  @IsInt()
  driverAge: number;

  @IsString()
  carManufacturer: string;

  @IsInt()
  @Min(5000, { message: 'Sorry! The price of the car is too low!' })
  purchasePrice: number;
}
