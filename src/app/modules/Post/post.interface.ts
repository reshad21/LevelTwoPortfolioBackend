// models/post.interface.ts
import { Document, Types } from 'mongoose';

export interface IPost extends Document {
    author: Types.ObjectId; // Use ObjectId instead of string
    title: string;
    postImage: string;
    content: string;
    category: 'tip' | 'story';
    isPremium: boolean;
    images: string[];
    upvotes: number;
    downvotes: number;
    comments: Types.ObjectId[]; // Use ObjectId[] for an array of ObjectIds
}
