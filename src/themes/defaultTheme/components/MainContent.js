import React, { useEffect, useState } from 'react';

const MainContent = ({ posts, currentPage, totalPages }) => {
    const [PostPreview, setPostPreview] = useState(null);
    const [Search, setSearch] = useState(null);
    const [Pagination, setPagination] = useState(null);
    const themeName = process.env.NEXT_PUBLIC_THEME || 'defaultTheme';

    useEffect(() => {
        const loadComponents = async () => {
            const PostPreviewModule = await import(`@/src/themes/${themeName}/components/PostPreview`);
            const SearchModule = await import(`@/src/themes/${themeName}/components/Search`);
            const PaginationModule = await import(`@/src/themes/${themeName}/components/Pagination`);

            setPostPreview(PostPreviewModule.default);
            setSearch(SearchModule.default);
            setPagination(PaginationModule.default);
        };

        loadComponents();
    }, [themeName]);

    if (!PostPreview || !Search || !Pagination) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-content">
            {posts && <Search posts={posts} />}
            {posts.map((post) => (
                <PostPreview key={post.id} post={post} />
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default MainContent;
