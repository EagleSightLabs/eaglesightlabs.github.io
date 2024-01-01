import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostContent = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
};

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'blog', `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        props: {
            post: {
                title: data.title,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const contentDirectory = path.join(process.cwd(), 'blog');
    const filenames = fs.readdirSync(contentDirectory);

    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(/\.md$/, '') },
    }));

    return { paths, fallback: false };
}

export default PostContent;
