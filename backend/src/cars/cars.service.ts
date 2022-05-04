import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car, CarDocument } from './schemas/car.schema';
import { CarOfferInputDto } from './dto/car-offer-input.dto';
import { CarOfferRejectDto } from './dto/car-offer-reject.dto';
import { CarOfferDto } from './dto/car-offer.dto';
import { GlobalOffer } from './entities/global-offer.entity';
import { UniversalOffer } from './entities/universal-offer.entity';

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

    return createdCar;
  }

  async offer(carOfferInputDto: CarOfferInputDto) {
    const car = await this.findByManufacturer(carOfferInputDto.carManufacturer);
    if (car) {
      if (carOfferInputDto.driverAge < car.minAgeRestriction) {
        return new CarOfferRejectDto(
          'Sorry! We can not accept this particular risk.',
          car.minAgeRestriction,
        );
      }

      return new CarOfferDto(
        new GlobalOffer(
          +car.globalPrice.toFixed(2),
          90,
          1000000,
          5000,
          1000,
          1,
        ),
        new UniversalOffer(
          calculateUniversalOfferPrice(
            car.globalPrice,
            car.universalPercentageCoefficient,
            carOfferInputDto.purchasePrice,
          ),
          180,
          3000000,
          10000,
          2500,
          1,
        ),
      );
    }
    return null;
  }
}

function calculateUniversalOfferPrice(
  globalPrice: number,
  universalPercentageCoefficient: number,
  purchasePrice: number,
) {
  const universalPrice =
    purchasePrice * universalPercentageCoefficient + globalPrice;
  return +universalPrice.toFixed(2);
}
