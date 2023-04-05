---
title: 'The useEffect Hook with Cleanup'
date: '2023-04-04'
excerpt: 'Learn how to use the useEffect hook in React to clean up resources on component unmount.'
image: useeffect-thumb.jpg
isFeatured: false
---

React's useEffect hook is a powerful tool for managing state and lifecycle in functional components. One of its most useful features is the ability to clean up resources when a component is unmounted.

Let's say you have a component that uses a third-party library to fetch some data from an API. When the component mounts, it needs to call a function provided by the library to set up the API connection. But when the component unmounts, it needs to call another function provided by the library to tear down the connection and prevent memory leaks.

Here's an example of how you could use useEffect to handle this scenario:

```js
import { useState, useEffect } from 'react';
import thirdPartyLibrary from 'third-party-library';

function MyComponent() {
	const [data, setData] = useState(null);

	useEffect(() => {
		// Set up the API connection
		thirdPartyLibrary.setup();

		// Fetch data from the API
		thirdPartyLibrary.fetchData().then((data) => setData(data));

		// Clean up the API connection on unmount
		return () => {
			thirdPartyLibrary.tearDown();
		};
	}, []);

	return (
		<div>
			{data ? (
				<ul>
					{data.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			) : (
				<p>Loading data...</p>
			)}
		</div>
	);
}
```
