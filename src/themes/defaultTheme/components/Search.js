// components/Search.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Search = ({ posts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchTerm === '') {
            setSearchResults([]);
        } else {
            const filteredResults = posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    }, [searchTerm, posts]);

    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
            />
            <div>
                {searchResults.map(post => (
                    <div key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>
                            <a>{post.title}</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
