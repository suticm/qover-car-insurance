/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../schemas/user.schema';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);

    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    describe('when findAll is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await controller.findAll();
      });

      test('then it should call usersService', () => {
        expect(service.findAll).toHaveBeenCalled();
      });

      test('then it should return an array of users', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe('getById', () => {
    describe('when findOne is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await controller.findOne('485611dasd');
      });

      test('then it should call usersService', () => {
        expect(service.findOne).toHaveBeenCalled();
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('createUser', () => {
    describe('when create is called', () => {
      let user: UserDto;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          username: userStub().username,
          email: userStub().email,
          password: userStub().password,
        };
        user = await controller.create(createUserDto);
      });

      test('then it should call usersService', () => {
        expect(service.create).toHaveBeenCalledWith(createUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });
});
