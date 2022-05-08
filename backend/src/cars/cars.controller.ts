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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
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
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Post('/offers')
  @ApiOperation({ summary: 'Create insurance offer' })
  @ApiResponse({
    status: 201,
    description: 'The offer has been successfully created.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  offer(@Body() carOfferInputDto: CarOfferInputDto) {
    return this.carsService.offer(carOfferInputDto);
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
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }
}
