import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { CarsService } from './cars.service';
import { CarOfferDto } from './dto/car-offer.dto';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.carsService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCarDto: CreateCarDto) {
    try {
      return await this.carsService.create(createCarDto);
    } catch {
      throw new ConflictException('Manufacturer already exists');
    }
  }

  @Post('/offer')
  @UseGuards(JwtStrategy)
  async offer(@Body() carOfferDto: CarOfferDto) {
    try {
      return await this.carsService.offer(carOfferDto);
    } catch {
      throw new BadRequestException();
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    try {
      return await this.carsService.findOne(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
