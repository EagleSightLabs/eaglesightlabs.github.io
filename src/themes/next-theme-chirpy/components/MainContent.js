import React from 'react';
import PostPreview from '@/components/PostPreview';

const MainContent = ({ posts }) => {
    return (
        <main
            aria-label="Main Content"
            className="col-12 col-lg-11 col-xl-9 px-md-4"
        >
            <div id="post-list" className="flex-grow-1 px-xl-1">
                {posts.map((post) => (
                    <PostPreview key={post.id} post={post} />
                ))}
                {/* ... pagination and other content ... */}
            </div>
        </main>
    );
};

export default MainContent;
