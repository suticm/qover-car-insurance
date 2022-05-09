import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { Connection } from 'mongoose';
import { DatabaseService } from '../../database/database.service';
import { carStub } from './stubs/car.stub';
import * as request from 'supertest';
import { CreateCarDto } from '../dto/create-car.dto';

describe('CarsController', () => {
  let dbConnection: Connection;
  let httpServer: any;
  let app: any;
  let token;

  beforeAll(async () => {
    jest.setTimeout(60000);
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef
      .get<DatabaseService>(DatabaseService)
      .getDbHandle();
    httpServer = app.getHttpServer();
  });

  beforeEach(async () => {
    await dbConnection.collection('cars').deleteMany({});

    await request(httpServer)
      .post('/auth/signup')
      .send({ username: 'test', email: 'test@test.com', password: 'test' });
    const loginResponse = await request(httpServer)
      .post('/auth/login')
      .send({ email: 'test@test.com', password: 'test' });

    token = loginResponse.body.accessToken;
  });

  afterAll(() => {
    app.close();
  });

  describe('getCars', () => {
    it('should return an array of cars', async () => {
      await dbConnection.collection('cars').insertOne(carStub());
      const response = await request(httpServer)
        .get('/cars')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([carStub()]);
    });
  });

  describe('createCar', () => {
    it('should create a car', async () => {
      const createCarDto: CreateCarDto = {
        manufacturer: carStub().manufacturer,
        globalPrice: carStub().globalPrice,
        universalPercentageCoefficient:
          carStub().universalPercentageCoefficient,
        restrictions: carStub().restrictions,
      };

      const response = await request(httpServer)
        .post('/cars')
        .send(createCarDto)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(carStub());
    });
  });
});
