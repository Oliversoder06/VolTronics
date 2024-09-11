import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/utils/dbConnect';
import Product from '@/models/Products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await connectToDB();

    switch (method) {
        case 'POST':
            try {
                console.log("Request Body:", req.body);
                const productData = { ...req.body };
                if (productData.stripeProductId === '') {
                    delete productData.stripeProductId;
                }
                const product = await Product.create(productData);
                res.status(201).json({ success: true, data: product });
            } catch (error) {
                console.error("Error creating product:", error);
                res.status(400).json({ success: false, error: (error as Error).message });
            }
            break;
        case 'GET':
            try {
                const products = await Product.find({});
                res.status(200).json({ success: true, data: products });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
