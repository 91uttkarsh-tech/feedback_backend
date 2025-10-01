import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/sitedata', express.static(path.join('public')));



// Start the server
const PORT = process.env.BACKEND_PORT || 6080;
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (error) {
    console.error(`Error connecting to the database or starting the server: ${error.message}`);
  }
};
startServer();