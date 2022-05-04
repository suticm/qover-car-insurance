import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  _id: string;

  @IsString()
  email: string;

  @IsString()
  username: string;

  constructor(_id: string, email: string, username: string) {
    this._id = _id;
    this.email = email;
    this.username = username;
  }
}
