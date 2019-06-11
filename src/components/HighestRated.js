import React from 'react';

const HighestRated = (props) => {
	
	const getHighest = details => {
		details.sort((a, b) => b.count - a.count);
		const highestRatedImages = details.slice(0, 3);
		
		return highestRatedImages.map(image => {
			return (
				<div key={image.id} className="highest_rated">
					<img src={`/images/${image.id}.jpg`} alt="highest_rated"/>
					<h3>Rating: {image.count}</h3>
				</div>
			)
		})
	};

	return (
		<div>
			<h1  style={{ color: '#00b71b' }}>Finished!</h1>
			<h3 style={{ textAlign: 'center' }}>Top 3 Highest Rated Cats:</h3>
			{getHighest(props.details)}
		</div>
	);
};

export default HighestRated;