// app/blog/[id]/page.js
'use client';
import Loader from '@/components/Loader';
import React, { useEffect, useState } from 'react';

const BlogDetailsPage = ({ params }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { id } = params;
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [params]);

    if (!post) {
        return <Loader />
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10 mt-10'>
            <h1 className='text-4xl font-bold text-blue-500'>Blog Details Page</h1>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
            </div>
        </div>

    );
};

export default BlogDetailsPage;
