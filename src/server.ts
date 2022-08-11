import express from 'express';

import 'express-async-errors';

import { Request, Response, NextFunction } from 'express';

import AppError from './errors/AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
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
});

app.listen(3333, () => console.log('Server is running in port 3333 🚀'));
