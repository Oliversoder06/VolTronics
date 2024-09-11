import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/utils/dbConnect';
import Product from '@/models/Products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await connectToDB();

    switch (method) {
        case 'GET':
            try {
                const product = await Product.findById(req.query.id);
                if (!product) {
                    return res.status(404).json({ success: false, message: 'Product not found' });
                }
                res.status(200).json({ success: true, data: product });
            } catch (error) {
                res.status(400).json({ success: false, error: (error as Error).message });
            }
            break;

        case 'PUT':
            try {
                const product = await Product.findByIdAndUpdate(req.query.id, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!product) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: product });
            } catch (error) {
                res.status(400).json({ success: false, error: (error as Error).message });
            }
            break;

        case 'DELETE':
            try {
                const deletedProduct = await Product.deleteOne({ _id: req.query.id });
                if (!deletedProduct) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false, error: (error as Error).message });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
