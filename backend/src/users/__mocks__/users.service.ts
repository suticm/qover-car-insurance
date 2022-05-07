import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockReturnValue([userStub()]),
  findOne: jest.fn().mockReturnValue(userStub()),
  findByEmail: jest.fn().mockReturnValue(userStub()),
  create: jest.fn().mockReturnValue(userStub()),
});
