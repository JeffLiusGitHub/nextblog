import Image from 'next/image';
import React from 'react';
import classes from './hero.module.css';
const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/portfolioImage.jpg"
					alt="An image showing Jeff"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Jeff</h1>
			<p>
			Welcome to my front-end development blog! I'll share tips, trends, and tools to help you build beautiful and user-friendly web applications. Let's dive in and explore together!
			</p>
		</section>
	);
};

export default Hero;
