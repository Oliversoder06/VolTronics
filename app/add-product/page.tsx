"use client";
import { useState } from 'react';
import toast from 'react-hot-toast';

const categories = ['Phone', 'Computer', 'TV'];
const subcategories: { [key: string]: string[] } = {
    Phone: ['iPhone', 'Samsung'],
    Computer: ['Laptop', 'Desktop'],
    TV: ['Samsung', 'LG'],
};

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubcategory('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const newProduct = {
            name,
            description,
            category,
            subcategory,
            price,
            stock,
            image,
            stripeProductId: ''
        };

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (res.ok) {
                toast.success('Product added successfully');
                setName('');
                setDescription('');
                setCategory('');
                setSubcategory('');
                setPrice(0);
                setStock(0);
                setImage('');
            } else {
                toast.error('Failed to add product');
            }
        } catch (error) {
            toast.error('Failed to add product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10 gap-5'>
            <div className='flex justify-between w-full max-w-[1440px]'>
                <div className='flex flex-col gap-3'>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[650px] h-[50px] rounded-sm pl-2'
                    />
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        required
                        className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[650px] h-[50px] rounded-sm pl-2'
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <select
                        value={subcategory}
                        onChange={(e) => setSubcategory(e.target.value)}
                        required
                        disabled={!category}
                        className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[650px] h-[50px] rounded-sm pl-2'
                    >
                        <option value="">Select Subcategory</option>
                        {category && subcategories[category].map((sub) => (
                            <option key={sub} value={sub}>
                                {sub}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                        className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[650px] h-[50px] rounded-sm pl-2'
                    />
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                placeholder="Price"
                                id='price'
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                required
                                className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[240px] h-[50px] rounded-sm pl-2'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="stock">Stock</label>
                            <input
                                type="number"
                                placeholder="Stock"
                                id='stock'
                                value={stock}
                                onChange={(e) => setStock(Number(e.target.value))}
                                required
                                className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[240px] h-[50px] rounded-sm pl-2'
                            />
                        </div>
                    </div>
                </div>
                <textarea
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className='border-[2px] border-primary_light focus:border-primary_dark outline-none w-[650px] h-[50px] rounded-sm pl-2'
                />
            </div>
            <button type="submit" className='w-[300px] h-[50px] bg-primary_dark text-white rounded-full flex items-center justify-center' disabled={loading}>
                {loading ? (
                    <div className='w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin'></div>
                ) : (
                    'Add Product'
                )}
            </button>
        </form>
    );
};

export default AddProduct;
