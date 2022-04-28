import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() authDto: AuthDto) {
    return await this.authService.login(authDto);
  }

  @Post('/signup')
  async signup(@Body() authDto: AuthDto) {
    return await this.authService.signup(authDto);
  }
}
