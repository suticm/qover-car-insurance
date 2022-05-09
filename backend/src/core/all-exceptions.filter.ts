import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
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

      errorMessage = errorResponse.message;
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
