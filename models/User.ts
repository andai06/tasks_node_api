import mongoose, { Document, Model } from 'mongoose';

const { Schema } = mongoose;

export interface IUser extends Document {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User