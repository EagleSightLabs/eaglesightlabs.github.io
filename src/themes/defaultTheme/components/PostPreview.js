import React from 'react';
import Link from 'next/link';

const PostPreview = ({ post }) => {
    return (
        <div className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p> {/* Assuming you have an excerpt field */}
            <Link href={`/posts/${post.slug}`} passHref>
                <a>Read More</a>
            </Link>
        </div>
    );
};

export default PostPreview;
