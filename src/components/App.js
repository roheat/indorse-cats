import React from 'react';
import DisplayImages from './DisplayImages';
import '../styles/app.css';

const App = () => {
	return (
		<div className="container">
			<h1>Which of these is a cat?</h1>
			<DisplayImages />
		</div>
	);
};

export default App;