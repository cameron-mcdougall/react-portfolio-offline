import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Work.css';
import PortfolioAssemble from './PortfolioAssemble';


function Work() {

	return(
		<React.Fragment>
			<section className='intro'>
				<p>Hi, I'm Cameron. I'm a Front End Web Developer based in Glasgow, Scotland. I am a multifaceted creative, with my skills mainly focusing on web development, graphic design (both digital and print), UX/UI design, and branding. In my spare time I make music and run improv Dungeons & Dragons games.</p>
				<p>Below are some examples of my work; feel free to browse or filter as you see fit. Thanks for stopping by!</p>
			</section>
			<section className='portfolio-container'>
				<Router>
					<PortfolioAssemble />
				</Router>
			</section>
		</React.Fragment>
	);

}

export default Work;