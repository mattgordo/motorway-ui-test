import React, { useEffect, useState } from 'react';

import Card from './components/card';

import './App.scss';

const App = () => {
  	const [images, setImages] = useState();

	useEffect(() => {
		fetch('images?limit=10')
		.then(res => res.json())
		.then(data => {
			console.log('Success:', data);
			setImages(data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}, []);

	const cards = images && images.map((imageInfo, idx) => <li key={idx}>
		<Card info={imageInfo} idx={idx} />
	</li>);

	return <section className="cards">
		<ul>
			{cards}
		</ul>
	</section>;
}

export default App;
