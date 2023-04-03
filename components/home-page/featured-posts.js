import React from 'react';
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';
const FeaturedPosts = (props) => {
	const DUMMY_POSTS = [
		{
			slug: 'getting-started',
			title: 'Getting Started1',
			image: 'getting-started.png',
			excerpt: 'NextJs is a react framework for production',
			date: '2023-04-03',
		},
        {
			slug: 'getting-started2',
			title: 'Getting Started2',
			image: 'getting-started.png',
			excerpt: 'NextJs is a react framework for production',
			date: '2023-04-03',
		},
        {
			slug: 'getting-started3',
			title: 'Getting Started3',
			image: 'getting-started.png',
			excerpt: 'NextJs is a react framework for production',
			date: '2023-04-03',
		},
        {
			slug: 'getting-started4',
			title: 'Getting Started4',
			image: 'getting-started.png',
			excerpt: 'NextJs is a react framework for production',
			date: '2023-04-03',
		},
        {
			slug: 'getting-started5',
			title: 'Getting Started5',
			image: 'getting-started.png',
			excerpt: 'NextJs is a react framework for production',
			date: '2023-04-03',
		},
	];
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={DUMMY_POSTS} />
		</section>
	);
};

export default FeaturedPosts;
