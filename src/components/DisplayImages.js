import React from 'react';
import _ from 'lodash';

class DisplayImages extends React.Component {
	
	state = {
		imageCount: 10,
		image1: '',
		image2: '',
		details: [] 
	}

	componentDidMount() {
		let details = [];
		for (let i = 0; i < this.state.imageCount; i++) {
			details.push({
				id: i+1,
				count: 0,
				visited: false
			});
		}

		this.setState({ details }, () => {
			this.generateRandomImages();
		});
	}

	generateRandomImages = () => {
		let arr = Array(this.state.imageCount).fill().map((_, i) => i = i+1);
		let randArray = _.shuffle(arr);

		const image1 = randArray[0];
		const image2 = randArray[1];
	
		let newDetails = this.state.details;
		
		newDetails[image1 - 1].visited = true;
		newDetails[image2 - 1].visited = true;

		this.setState({
			image1,
			image2,
			details: newDetails
		});
	}

	handleClick = (index) => {
		let newDetails = this.state.details;
		newDetails[index - 1].count = newDetails[index - 1].count + 1;

		this.setState({ details: newDetails }, () => {
			this.generateRandomImages();
		});
	}

	render() {
		const { image1, image2 } = this.state;
		return (
			<div>
				{
					image1 && image2 ?
					<div className="image_container">
						<div className="image" onClick={() => this.handleClick(image1)}>
							<img src={`/images/${image1}.jpg`} alt="random_image"/>
						</div>
						<div className="image" onClick={() => this.handleClick(image2)}>
							<img src={`/images/${image2}.jpg`} alt="random_image" />
						</div>
					</div>
					:null
				}
			</div>
		);
	}
}

export default DisplayImages;