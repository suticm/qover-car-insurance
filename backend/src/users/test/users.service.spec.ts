import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users.service';

class ApiServiceMock {
  create(dto: CreateUserDto) {
    return {};
  }
  findOne(id: string) {
    return {};
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: UsersService,
      useClass: ApiServiceMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, ApiServiceProvider],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should call findOne method with expected param', () => {
    const findOneSpy = jest.spyOn(service, 'findOne');
    const findOneOptions = '123';
    service.findOne(findOneOptions);
    expect(findOneSpy).toHaveBeenCalledWith(findOneOptions);
  });

  it('should call create user method with expected param', () => {
    const createSpy = jest.spyOn(service, 'create');
    const createUserDto: CreateUserDto = {
      username: 'test',
      email: 'test@test.com',
      password: 'pwd123',
    };
    service.create(createUserDto);
    expect(createSpy).toHaveBeenCalledWith(createUserDto);
  });
});
