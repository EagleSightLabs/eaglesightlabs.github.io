// src/themes/defaultTheme/components/MainContent.js
import React, { useState, useEffect } from 'react';
import Search from './Search';
import PostPreview from './PostPreview';
import Pagination from './Pagination';

const MainContent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        };

        fetchPosts();
    }, []);

    return (
        <div className="main-content">
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
            />
            <Search searchTerm={searchTerm} />
            {searchTerm === '' && posts.map((post) => (
                <PostPreview key={post.slug} post={post} />
            ))}
            {searchTerm === '' && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};

export default MainContent;
