import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.content}>
				<p>© 2023 All Rights Reserved.</p>
				<ul className={classes.links}>
					<li>
						<a href="https://portfolio-add7c.web.app/" target="_blank">
							More information, please go to my porfolio!
						</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
