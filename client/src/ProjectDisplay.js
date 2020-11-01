import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDisplay.css';
import ProjectPagination from './ProjectPagination';


class ProjectDisplay extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			index: props.position, // current element from array map
			array: props.array // current shuffled array
		};
	}

	componentDidMount() {
		document.body.classList.add('project-open');
	}

	componentWillUnmount() {
		document.body.classList.remove('project-open');
	}

	render() {

		let shuffledArray = this.state.array;
		let item = shuffledArray[this.state.index];

		const imageDisplay = item.images.map((src, id) => 
			<img key={id} src={src} alt='' />
		)
	
		return(
			<section className='project-detail'>

				<div className='quick-home'>
					<Link to='/' />
				</div>
			
				<article className='project-display-wrap'>

					<ProjectPagination index={this.state.index} array={this.state.array} loc='mobile' />

					<div className='content-wrap'>
						<section className='info-display'>
							<header>
								<Link to='/'>
									<button className='close'>Close X</button>
								</Link>
							
								<aside className='project-details'>
									<strong>Name:</strong> {item.title}<br />
									<strong>Type:</strong> {item.type}
								</aside>
							</header>
							<aside className='info-display-content'>
								<p>{item.copy}</p>
								{(item.type.includes('Web')) ? <p>The site can be <a href={item.url} target='_blank' rel="noopener noreferrer">viewed here</a></p> : null}
							</aside>
							<ProjectPagination index={this.state.index} array={this.state.array} loc='desktop' />
							
						</section>

						<section className='image-display'>
							{imageDisplay}
						</section>
					</div>

				</article>

			</section>
		);
	}
}

export default ProjectDisplay;