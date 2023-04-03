import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-utils';

const HomePage = (props) => {
	//hero

	//featured posts

	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

export const getStaticProps = async () => {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
		// revalidate: 1800,
	};
};

export default HomePage;
