import * as bcrypt from 'bcryptjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

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

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) return null;

    const payload = {
      username: user.email,
      sub: user._id,
    };

    return {
      id: payload.sub,
      email: payload.username,
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(signupDto: SignupDto) {
    try {
      return await this.usersService.create(signupDto);
    } catch {
      throw new ConflictException('User with the same email already exists');
    }
  }
}
