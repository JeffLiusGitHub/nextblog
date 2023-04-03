import React from 'react';
import { getPostData } from '../../lib/posts-utils';
import PostContent from './post-detail/post-content';

const PostDetailPage = () => {
	return <PostContent />;
};

export const getStaticProps = (context) => {
	const { params } = context;
	const { slug } = params;
	getPostData(slug);
};

export default PostDetailPage;
