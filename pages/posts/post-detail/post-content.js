import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
const DUMMY_POST = {
	slug: 'getting-started',
	title: 'Getting Started1',
	image: 'getting-started.png',
	excerpt: 'NextJs is a react framework for production',
	date: '2023-04-03',
	content: '# This is a first post',
};

const PostContent = () => {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
