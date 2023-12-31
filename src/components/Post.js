import React, { useEffect } from 'react';
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
        return <iframe width="560" height="315" src={src} frameBorder="0" allowFullScreen title={alt}></iframe>;
    }
    return <img alt={alt} src={src} />;
};

const Post = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            components={{
                code: CodeBlock,
                img: YouTubeEmbed
            }}
        />
    );
};

export default Post;
