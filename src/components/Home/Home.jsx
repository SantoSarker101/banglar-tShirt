import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
	let tShirts = useLoaderData()
	return (
		<div>

		<h2>This is Home: {tShirts.length}</h2>

		</div>
	);
};

export default Home;