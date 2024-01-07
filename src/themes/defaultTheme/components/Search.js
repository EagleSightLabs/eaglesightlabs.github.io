// src/themes/defaultTheme/components/Search.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Search = ({ searchTerm }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchTerm) {
                const response = await fetch(`/api/search?term=${encodeURIComponent(searchTerm)}`);
                const data = await response.json();
                setSearchResults(data);
            } else {
                setSearchResults([]);
            }
        };

        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div>
            {searchResults.map(post => (
                <div key={post.slug}>
                    <Link href={`/posts/${post.slug}`} passHref>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Search;
