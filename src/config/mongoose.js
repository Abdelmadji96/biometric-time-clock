import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const dbURI = process.env.LOCAL_DB;
  mongoose.set('strictQuery', false);
  mongoose.connect(`${dbURI}`, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Database Connected');
  });

  db.on('error', (error) => {
    onsole.log('Database Connection error:', error);
  });
};

const closeDB = async () => {
  const db = mongoose.connection;
  db.close();
  db.once('disconnected', () => {
    console.log('Database Disconnected');
  });

  db.once('disconnected', () => {
    console.log('Database Connection Closed');
  });

  db.on('error', (error) => {
    console.log('Database Connection error:', error);
  });
};

export { connectDB, closeDB };
