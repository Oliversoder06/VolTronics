import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProduct extends Document {
    name: string;
    description: string;
    category: string;
    subcategory: string;
    price: number;
    stock: number;
    image: string;
    stripeProductId?: string;
}

const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    stripeProductId: { type: String, required: false },
}, { timestamps: true });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
