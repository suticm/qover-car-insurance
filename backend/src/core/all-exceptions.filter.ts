import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { HttpExceptionResponse } from './interfaces/http-exception-response.interface';
import { MongoError } from 'mongodb';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status: HttpStatus;
    let errorMessage: string;
    let errorResponse;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      errorResponse = exception.getResponse();

      if (status === HttpStatus.BAD_REQUEST) {
        errorMessage = errorResponse.message[0];
      } else {
        errorMessage =
          (errorResponse as HttpExceptionResponse).error || exception.message;
      }
    } else if (exception instanceof MongoError) {
      switch (exception.code) {
        case 11000:
          status = 409;
          errorMessage = exception.errmsg;
          break;
        default:
          status = 500;
          errorMessage = 'Internal server error';
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage = 'Internal server error.';
    }

    response.status(status).json(errorMessage);
  }
}
