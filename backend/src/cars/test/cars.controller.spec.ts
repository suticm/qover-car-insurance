/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from '../cars.controller';
import { CarsService } from '../cars.service';
import { CarDto } from '../dto/car.dto';
import { CreateCarDto } from '../dto/create-car.dto';
import { Car } from '../schemas/car.schema';
import { carStub } from './stubs/car.stub';

jest.mock('../cars.service');

describe('CarsController', () => {
  let controller: CarsController;
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
    service = module.get<CarsService>(CarsService);

    jest.clearAllMocks();
  });

  describe('getCars', () => {
    describe('when findAll is called', () => {
      let cars: Car[];

      beforeEach(async () => {
        cars = await controller.findAll();
      });

      test('then it should call carsService', () => {
        expect(service.findAll).toHaveBeenCalled();
      });

      test('then it should return an array of cars', () => {
        expect(cars).toEqual([carStub()]);
      });
    });
  });

  describe('createCar', () => {
    describe('when create is called', () => {
      let car: CarDto;
      let createCarDto: CreateCarDto;

      beforeEach(async () => {
        createCarDto = {
          manufacturer: carStub().manufacturer,
          globalPrice: carStub().globalPrice,
          universalPercentageCoefficient:
            carStub().universalPercentageCoefficient,
          restrictions: carStub().restrictions,
        };
        car = await controller.create(createCarDto);
      });

      test('then it should call carsService', () => {
        expect(service.create).toHaveBeenCalledWith(createCarDto);
      });

      test('then it should return a car', () => {
        expect(car).toMatchObject(carStub());
      });
    });
  });
});
