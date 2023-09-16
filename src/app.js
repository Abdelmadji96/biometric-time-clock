import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import api from './routes/api.js';
import { connectDB } from './config/mongoose.js';

dotenv.config();

const app = express();
const serverPort = 3000;

const devOrigins = process.env.CORS_FRONTEND_DEV_DOMAINS?.split(' ');

app.use(cors({ devOrigins, optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** Initialise mongoose connection */
connectDB();

app.use('/api', api);

app.listen(serverPort, () => {
  console.log(`Time clock Server listening on port ${serverPort}`);
});
