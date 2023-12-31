import { useRouter } from 'next/router';
import { getPostData } from '@lib/posts'; // Updated import path
import Post from '@components/Post'; // Updated import path

export default function BlogPostPage({ content }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>{slug}</h1>
            <Post content={content} />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const postData = await getPostData(`${slug}.md`);
    return {
        props: {
            content: postData.content, // Ensure this is the Markdown content
        },
    };
}

export async function getStaticPaths() {
    // Your logic to generate paths for static generation
    // Replace with your actual logic to list all markdown files
    const paths = [
        // Example: { params: { slug: 'my-first-post' } }
    ];
    return {
        paths,
        fallback: false,
    };
}
