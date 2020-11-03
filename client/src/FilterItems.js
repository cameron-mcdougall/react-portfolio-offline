import React from 'react';
import './FilterItems.css';

class Filter extends React.Component {

	render() {
		return(
			<nav className='filter'>
				Sort items:
				<ul>
					<li className='bounce' style={{animationDelay: 0.06 +'s'}}><button onClick={(e) =>
						this.props.filterUpdate(e, 'All')}>All</button></li>
					<li className='bounce' style={{animationDelay: 0.12+'s'}}><button onClick={(e) =>
						this.props.filterUpdate(e, 'Web')}>Web</button></li>
					<li className='bounce' style={{animationDelay: 0.18+'s'}}><button onClick={(e) =>
						this.props.filterUpdate(e, 'Branding')}>Branding</button></li>
					<li className='bounce' style={{animationDelay: 0.24+'s'}}><button onClick={(e) =>
						this.props.filterUpdate(e, 'Graphic')}>Graphic</button></li>
				</ul>
			</nav>
		);
	}
}

export default Filter;