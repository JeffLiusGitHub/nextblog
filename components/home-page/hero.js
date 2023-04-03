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
				I blog about web development-especially frontend frameworks like react
				or next.
			</p>
		</section>
	);
};

export default Hero;
