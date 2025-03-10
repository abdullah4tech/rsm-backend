import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PROD_URI = process.env.PROD_URI;
if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

// Prevent re-initialization on code reload
mongoose.connection.once('open', () => {
  console.log('MongoDB connection is open.');
});

export default connectDB;
