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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CarsService } from './cars.service';
import { CarOfferInputDto } from './dto/car-offer-input.dto';
import { CreateCarDto } from './dto/create-car.dto';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all cars' })
  @ApiResponse({
    status: 200,
    description: 'The cars have been successfully fetched.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.carsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create car' })
  @ApiResponse({
    status: 201,
    description: 'The car has been successfully created.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCarDto: CreateCarDto) {
    try {
      return await this.carsService.create(createCarDto);
    } catch {
      throw new ConflictException('Manufacturer already exists');
    }
  }

  @Post('/offers')
  @ApiOperation({ summary: 'Create insurance offer' })
  @ApiResponse({
    status: 201,
    description: 'The offer has been successfully created.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async offer(@Body() carOfferInputDto: CarOfferInputDto) {
    try {
      return await this.carsService.offer(carOfferInputDto);
    } catch {
      throw new BadRequestException();
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a car by id' })
  @ApiResponse({
    status: 200,
    description: 'The car was successfully found.',
  })
  @ApiResponse({
    status: 404,
    description: 'The car with the specified id was not found',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    try {
      return await this.carsService.findOne(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
