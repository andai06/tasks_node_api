import mongoose, { Document, Model } from 'mongoose';

const { Schema } = mongoose;

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User