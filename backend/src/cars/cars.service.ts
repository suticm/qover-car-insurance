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
import { carOfferConstants } from '../constants';
import { CarDto } from './dto/car.dto';

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
      createdCar.minAgeRestriction,
    );
  }

  async offer(carOfferInputDto: CarOfferInputDto) {
    const car = await this.findByManufacturer(carOfferInputDto.carManufacturer);
    if (!car) {
      return new CarOfferRejectDto('Manufacturer does not exist');
    }

    if (carOfferInputDto.driverAge < car.minAgeRestriction) {
      return new CarOfferRejectDto(
        'Sorry! We can not accept this particular risk.',
        car.minAgeRestriction,
      );
    }

    return new CarOfferDto(
      new GlobalOffer(
        +car.globalPrice.toFixed(2),
        carOfferConstants.maximumDurationTravel,
        carOfferConstants.medicalExpensesReimbursement,
        carOfferConstants.personalAssistanceAbroad,
        carOfferConstants.travelAssistanceAbroad,
        carOfferConstants.coverageDuration,
      ),
      new UniversalOffer(
        calculateUniversalOfferPrice(
          car.globalPrice,
          car.universalPercentageCoefficient,
          carOfferInputDto.purchasePrice,
        ),
        carOfferConstants.maximumDurationTravel,
        carOfferConstants.medicalExpensesReimbursement,
        carOfferConstants.personalAssistanceAbroad,
        carOfferConstants.travelAssistanceAbroad,
        carOfferConstants.coverageDuration,
      ),
    );
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
