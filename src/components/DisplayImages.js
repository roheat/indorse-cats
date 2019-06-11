import React from 'react';
import _ from 'lodash';

class DisplayImages extends React.Component {
	
	state = {
		imageCount: 10,
		images: [],
		visitedBool: [],
		visitedCount: [] 
	}

	componentDidMount() {
		let falseArr = Array(this.state.imageCount).fill().map(() => false);
		let zeroArr = Array(this.state.imageCount).fill().map(() => 0);
		this.setState({ visitedBool: falseArr, visitedCount: zeroArr });
		this.generateRandomImages();
	}

	generateRandomImages = () => {
		let arr = Array(this.state.imageCount).fill().map((_, i) => i = i+1);
		let images = [];
		let randArray = _.shuffle(arr);

		images.push(randArray[0]);
		images.push(randArray[1]);
		
		let newBoolArr = this.state.visitedBool;
		newBoolArr[images[0]] = true;
		newBoolArr[images[1]] = true;
		
		this.setState({
			images,
			visitedBool: newBoolArr
		});
	}

	handleClick = (index) => {
		let newCountArr = this.state.visitedCount;
		newCountArr[index-1] = newCountArr[index-1] + 1;
		this.setState({ visitedCount: newCountArr });
		this.generateRandomImages();
	}

	render() {
		console.log(this.state.visitedBool);
		return (
			<div>
				{
					this.state.images ?
					<div className="image_container">
						<div className="image" onClick={() => this.handleClick(this.state.images[0])}>
							<img src={`/images/${this.state.images[0]}.jpg`} alt="random_image"/>
						</div>
						<div className="image" onClick={() => this.handleClick(this.state.images[1])}>
							<img src={`/images/${this.state.images[1]}.jpg`} alt="random_image" />
						</div>
					</div>
					:null
				}
			</div>
		);
	}
}

export default DisplayImages;