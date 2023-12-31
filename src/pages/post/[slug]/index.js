import { useRouter } from 'next/router';
import Post from '@components/Post';
import { getPostData, getAllPostSlugs } from '@lib/posts';

export default function PostContent({ content, slug }) {
    const router = useRouter();

    // Use the slug from the router if it's available (client-side navigation)
    // Otherwise, use the slug passed to the component (server-side rendering)
    const postSlug = router.query.slug || slug;

    return (
        <div>
            <h1>{postSlug}</h1>
            <Post content={content} />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const postData = await getPostData(slug); // No need to append '.md' here
    return {
        props: {
            content: postData.content,
            slug, // Pass the slug as a prop for server-side rendering
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs(); // This function should return an array of slugs
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}
