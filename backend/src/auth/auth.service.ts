import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isValid = await bcrypt.compare(pass, user.password);
      if (isValid) return user;
    }
    return null;
  }

  async login(user: AuthDto) {
    const loggedInUser = await this.usersService.findByEmail(user.email);
    if (!loggedInUser) return null;

    const payload = {
      username: loggedInUser.email,
      sub: loggedInUser._id,
    };

    return {
      id: payload.sub,
      email: payload.username,
      access_token: this.jwtService.sign(payload),
    };
  }
}
