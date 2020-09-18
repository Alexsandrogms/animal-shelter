import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import routes from './routes';

config();

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  database() {
    mongoose
      .connect(process.env.MONGODB_URL_KEY, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Database connected');
      });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
