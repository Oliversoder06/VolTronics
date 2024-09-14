import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@/utils/dbConnect';
import Product from '@/models/Products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    await connectToDB();

    try {
        const products = await Product.find({ subcategory: 'Laptop' });
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

// Test API in Postman: http://localhost:3000/api/products/computer/laptop/getLaptop