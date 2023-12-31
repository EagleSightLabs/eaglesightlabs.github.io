import React, { useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // or any other theme you prefer

const CodeBlock = ({ language, value }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className={`language-${language}`}>
            <code>{value}</code>
        </pre>
    );
};

const YouTubeEmbed = ({ alt, src }) => {
    if (src.startsWith('https://www.youtube.com/embed/')) {
        return (
            <iframe
                width="560"
                height="315"
                src={src}
                frameBorder="0"
                allowFullScreen
                title={alt}
            ></iframe>
        );
    }
    // Replace this with the Next.js Image component
    return (
        <Image
            alt={alt}
            src={src}
            width="560"
            height="315"
            layout="responsive"
        />
    );
};

const Post = ({ content }) => {
    return (
        <ReactMarkdown components={{ code: CodeBlock, img: YouTubeEmbed }}>
            {content}
        </ReactMarkdown>
    );
};

export default Post;
