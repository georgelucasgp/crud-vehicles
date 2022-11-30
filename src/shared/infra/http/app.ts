import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import '../../container';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

import { routes } from './routes';

import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  /* eslint-disable */
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    /* eslint-enable */
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.log(err);
    return response.status(500).json({
      status: 'error',
      message: 'Integral server error',
    });
  },
);

export { app };
