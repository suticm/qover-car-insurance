import { carStub } from '../test/stubs/car.stub';

export const CarsService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockReturnValue([carStub()]),
  findOne: jest.fn().mockReturnValue(carStub()),
  findByManufacturer: jest.fn().mockReturnValue(carStub()),
  create: jest.fn().mockReturnValue(carStub()),
});
