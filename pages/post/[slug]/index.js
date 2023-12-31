// pages/post/[slug]/index.js
import { useRouter } from 'next/router';
import { getPostData } from '../../../lib/posts';

export default function BlogPost({ contentHtml }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>{slug}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const postData = await getPostData(`${slug}.md`);
    return {
        props: {
            ...postData,
        },
    };
}

export async function getStaticPaths() {
    const postFileNames = fs.readdirSync(contentDirectory);
    const paths = postFileNames.map((fileName) => ({
        params: { slug: fileName.replace(/\.md$/, '') },
    }));
    return {
        paths,
        fallback: false,
    };
}
