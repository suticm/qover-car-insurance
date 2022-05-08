import { User } from 'src/users/schemas/user.schema';

export const userStub = (): User => {
  return {
    username: 'testUser',
    email: 'test@test.com',
    password: 'xyz123',
  };
};
