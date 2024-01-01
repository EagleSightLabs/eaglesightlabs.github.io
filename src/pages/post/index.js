// pages/post/index.js
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'blog');

export default function Blog({ posts }) {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const postFileNames = fs.readdirSync(contentDirectory);
    const posts = postFileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fileContents = fs.readFileSync(
            path.join(contentDirectory, fileName),
            'utf8',
        );
        const match = fileContents.match(/title: (.*)/);
        const title = match && match[1] ? match[1] : '';
        return {
            slug,
            title,
        };
    });
    return {
        props: {
            posts,
        },
    };
}
