import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Home = ({ recentPosts }) => {
    return (
        <div>
            <h1>Recent Articles</h1>
            <ul>
                {recentPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/post/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    const contentDirectory = path.join(process.cwd(), 'blog');
    const filenames = fs.readdirSync(contentDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(contentDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            title: data.title,
            date: data.date ? new Date(data.date).toISOString() : null, // Convert date to ISO string
        };
    });

    // Sort posts by date (newest first) and get the most recent 5 posts
    const recentPosts = posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    return { props: { recentPosts } };
}

export default Home;
