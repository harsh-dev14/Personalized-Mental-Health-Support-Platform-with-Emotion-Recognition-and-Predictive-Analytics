import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  // Additional fields as needed
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    // Additional fields
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
