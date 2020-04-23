import React from 'react';
import { Route } from 'react-router-dom';
import Filter from './FilterItems';
import PortfolioItem from './PortfolioItem';
import ProjectDisplay from './ProjectDisplay';
import { portfolioElements } from './Content';


class PortfolioAssemble extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			filter: ''
		};

		this.filterUpdate = this.filterUpdate.bind(this);

	}

	filterUpdate(event, type) {

		this.setState({
			filter: type
		})
	
	}

	render() {

		// Randomiser function
		const shuffle = array => {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i

				// Swap elements array[i] and array[j] (using destructing assignmnet)
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		// Randomise and filter (is applicable) the projects
		const shuffledPortfolio = this.state.filter === 'All' ? shuffle(portfolioElements) : shuffle(portfolioElements).filter(work => work.type.includes(this.state.filter));

		// Map newly created projects array
		const portfolioLinkAssembly = Object.keys(shuffledPortfolio).map(key => 
	    	<PortfolioItem key={key} item={shuffledPortfolio[key]} link={key} />
		)

		// Map corrisponding Routes for PorjectDisplay
		const portfolioItemAssembly = Object.keys(shuffledPortfolio).map(element =>
			<Route key={element} path={shuffledPortfolio[element].id} render={(props) => <ProjectDisplay {...props} position={element} />} />
		)

		return (
			<React.Fragment>
				<Filter
					filterUpdate={this.filterUpdate.bind(this)}
				/>
				{portfolioLinkAssembly}
				{portfolioItemAssembly}
			</React.Fragment>
		);
	}
}

export default PortfolioAssemble;