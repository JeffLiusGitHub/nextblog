import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';
import Footer from '../components/home-page/footer';
const HomePage = (props) => {
	return (
		<>
			<Head>
				<title>Jeff Liu's Blog</title>
				<meta
					name="description"
					content="I post about programming and web development"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
			<Footer />
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
