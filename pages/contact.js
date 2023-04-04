import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';
const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name="description" content="send me your messages!" />
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
