import mongoose, { Document, Schema } from 'mongoose';

interface IOrder extends Document {
    user: {
        name: string;
        email: string;
        mobileNumber: string;
        profilePhoto: string;
    };
    products: Array<{
        product: mongoose.Schema.Types.ObjectId;
        quantity: number;
    }>;
    totalPrice: number;
    status: string;
    paymentStatus: string;
    transactionId: string;
}

const OrderSchema: Schema = new Schema(
    {
        user: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            mobileNumber: { type: String, required: true },
            profilePhoto: { type: String, required: true },
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Post',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
            default: 'Pending',
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Paid', 'Failed'],
            default: 'Pending',
        },
        transactionId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
