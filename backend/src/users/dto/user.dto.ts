import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  _id: string;

  @IsString()
  email: string;

  constructor(_id: string, email: string) {
    this._id = _id;
    this.email = email;
  }
}
