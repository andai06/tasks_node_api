import mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/my_api_db');
    console.log('mongodb connected')
  } catch (error) {
    console.log(error);
  }
}