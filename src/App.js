import React, { useEffect, useState } from 'react';

import Card from './components/card';
import Form from './components/form';

import './App.scss';

const App = () => {
	const [images, setImages] = useState();

	useEffect(() => {
		const startTime = window.performance.now();
		let endTime;

		fetch('images?limit=10')
		.then(res => res.json())
		.then(data => {
			endTime = window.performance.now()
			setImages(data);

			// Check performance of API (I Hope)
			console.log(`${(endTime - startTime) / 1000} Seconds`);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}, []);

	const cards = images && images.map((imageInfo, idx) => <li key={idx}>
		<Card info={imageInfo} idx={idx} />
	</li>);

	return <div className="container">
		<h1 className="title">Motorway UI Test</h1>
		<section className="form-container">
			<Form />
		</section>
		<section className="cards">
			<ul>
				{cards}
			</ul>
		</section>
	</div>;
}

export default App;
