/* eslint-disable no-useless-escape */
// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

// Define the User schema
const userSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String, // URL of profile picture
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  passwordChangedAt: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  status: {
    type: Boolean,
    default: false,
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post', // Reference to the Post model
    },
  ],
  purchasedContent: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // Reference to the Order model
      isPremium: { type: Boolean, default: false },
    },
  ],
});

// Create and export User model
export const User = mongoose.model<IUser>('User', userSchema);
