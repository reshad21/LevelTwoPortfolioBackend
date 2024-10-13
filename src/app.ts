/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: ['https://pet-buddy-frntend.vercel.app'], credentials: true }));
app.use(cookieParser())
// application routes
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Apollo Gears API Service',
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
