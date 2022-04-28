import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car, CarDocument } from './schemas/car.schema';
import { CarOfferDto } from './dto/car-offer.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    return this.carModel.findById(id);
  }

  findByManufacturer(manufacturer: string) {
    return this.carModel.findOne({ manufacturer });
  }

  async create(createCarDto: CreateCarDto) {
    const car = new this.carModel(createCarDto);
    const createdCar = await car.save();

    if (createdCar) return createdCar;
  }

  async offer(carOfferDto: CarOfferDto) {
    const car = await this.findByManufacturer(carOfferDto.car);
    if (car) {
      if (car.highRisk && carOfferDto.driverAge < car.ageRestriction) {
        return {
          expected: {
            driverAge: car.ageRestriction,
          },
          provided: carOfferDto.driverAge,
          constraints: 'Sorry! We can not accept this particular risk.',
        };
      }

      return {
        annually: {
          globalOffer: car.globalPrice.toFixed(2),
          universalOffer: (
            car.globalPrice +
            car.universalPercentage * carOfferDto.purchasePrice
          ).toFixed(2),
        },
        monthly: {
          globalOffer: (car.globalPrice / 12).toFixed(2),
          universalOffer: (
            (car.globalPrice +
              car.universalPercentage * carOfferDto.purchasePrice) /
            12
          ).toFixed(2),
        },
      };
    }
  }
}
