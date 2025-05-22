import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('MongoDB connection error:', error);
    process.exit(1);
  }
};