export class UserDto {
  _id: string;
  email: string;

  constructor(_id: string, email: string) {
    this._id = _id;
    this.email = email;
  }
}
