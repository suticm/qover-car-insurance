import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { Car, CarDocument } from './schemas/car.schema';
import { CarOfferInputDto } from './dto/car-offer-input.dto';
import { CarOfferRejectDto } from './dto/car-offer-reject.dto';
import { CarDto } from './dto/car.dto';
import { RestrictionFactory } from './offer/validators/restriction-factory';
import { getOffer } from '../cars/offer';

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

    return new CarDto(
      createdCar.id,
      createdCar.manufacturer,
      createdCar.globalPrice,
      createdCar.universalPercentageCoefficient,
      createdCar.restrictions,
    );
  }

  async offer(carOfferInputDto: CarOfferInputDto) {
    const car = await this.findByManufacturer(carOfferInputDto.carManufacturer);
    if (!car) {
      return new CarOfferRejectDto('Manufacturer does not exist');
    }

    car.toObject().restrictions.forEach((restriction) => {
      RestrictionFactory(restriction)(carOfferInputDto);
    });

    return getOffer(car, carOfferInputDto.purchasePrice);
  }
}
