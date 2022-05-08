import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email).exec();
    if (user) {
      const isValid = await bcrypt.compare(pass, user.password);
      if (isValid) {
        return user;
      }
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email).exec();
    if (!user) {
      return null;
    }

    const payload = {
      email: user.email,
      sub: user._id,
    };

    return new LoginResponseDto(
      payload.sub,
      payload.email,
      this.jwtService.sign(payload),
    );
  }

  signup(signupDto: SignupDto) {
    return this.usersService.create(signupDto);
  }
}
