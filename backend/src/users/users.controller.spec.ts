/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let spyService: UsersService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: UsersService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
        findOne: jest.fn(() => {}),
        create: jest.fn(() => []),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ApiServiceProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    spyService = module.get<UsersService>(UsersService);
  });

  it('calling findAll users method', () => {
    controller.findAll();
    expect(spyService.findAll).toHaveBeenCalled();
  });

  it('calling findOne user by id', () => {
    const userDto = new UserDto('123', 'test@test.com', 'test');
    controller.findOne(userDto._id);
    expect(spyService.findOne).toHaveBeenCalled();
  });

  it('calling create user', () => {
    const userDto = new CreateUserDto();
    expect(controller.create(userDto)).not.toEqual(null);
  });

  it('calling create user', () => {
    const userDto = new CreateUserDto();
    controller.create(userDto);
    expect(spyService.create).toHaveBeenCalledWith(userDto);
  });
});
