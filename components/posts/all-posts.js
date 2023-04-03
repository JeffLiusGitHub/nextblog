import React from 'react';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
const AllPosts = (props) => {
	// const DUMMY_POSTS = [
	// 	{
	// 		slug: 'getting-started',
	// 		title: 'Getting Started1',
	// 		image: 'getting-started.png',
	// 		excerpt: 'NextJs is a react framework for production',
	// 		date: '2023-04-03',
	// 	},
	// 	{
	// 		slug: 'getting-started2',
	// 		title: 'Getting Started2',
	// 		image: 'getting-started.png',
	// 		excerpt: 'NextJs is a react framework for production',
	// 		date: '2023-04-03',
	// 	},
	// 	{
	// 		slug: 'getting-started3',
	// 		title: 'Getting Started3',
	// 		image: 'getting-started.png',
	// 		excerpt: 'NextJs is a react framework for production',
	// 		date: '2023-04-03',
	// 	},
	// 	{
	// 		slug: 'getting-started4',
	// 		title: 'Getting Started4',
	// 		image: 'getting-started.png',
	// 		excerpt: 'NextJs is a react framework for production',
	// 		date: '2023-04-03',
	// 	},
	// 	{
	// 		slug: 'getting-started5',
	// 		title: 'Getting Started5',
	// 		image: 'getting-started.png',
	// 		excerpt: 'NextJs is a react framework for production',
	// 		date: '2023-04-03',
	// 	},
	// ];
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default AllPosts;
