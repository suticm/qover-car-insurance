import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'dev.env',
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    CarsModule,
  ],
})
export class AppModule {}
