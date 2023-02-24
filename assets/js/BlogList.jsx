import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {blogs.map(blog => (
                    <tr key={blog.id}>
                        <td>{blog.title}</td>
                        <td>{blog.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;