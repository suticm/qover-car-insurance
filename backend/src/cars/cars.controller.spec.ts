/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;
  let spyService: CarsService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: CarsService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
        findOne: jest.fn(() => {}),
        findByEmail: jest.fn(() => {}),
        create: jest.fn(() => []),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService, ApiServiceProvider],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
