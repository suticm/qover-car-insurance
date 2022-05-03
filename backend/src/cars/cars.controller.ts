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
import { CarsService } from './cars.service';
import { CarOfferInputDto } from './dto/car-offer-input.dto';
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

  @Post('/offers')
  @UseGuards(JwtAuthGuard)
  async offer(@Body() carOfferInputDto: CarOfferInputDto) {
    try {
      return await this.carsService.offer(carOfferInputDto);
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
