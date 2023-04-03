import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier) => {
	const postSlug = postIdentifier.replace(/\.md$/, '');
	const filePath = path.join(postDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const postData = { slug: postSlug, ...data, content };
	return postData;
};

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postDirectory);

	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});
	const sortedPosts = allPosts.sort((pA, pB) => (pA.date > pB.date ? -1 : 1));
	return sortedPosts;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
};
