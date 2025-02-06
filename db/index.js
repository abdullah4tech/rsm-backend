import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

// Connect to MongoDB
const db = mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

export default db;