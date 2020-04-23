import React from 'react';
import './FilterItems.css';

class Filter extends React.Component {

	render() {
		return(
			<nav className='filter'>
				Sort items:
				<ul>
					<li><button onClick={(e) =>
						this.props.filterUpdate(e, 'All')}>All</button></li>
					<li><button onClick={(e) =>
						this.props.filterUpdate(e, 'Web')}>Web</button></li>
					<li><button onClick={(e) =>
						this.props.filterUpdate(e, 'Branding')}>Branding</button></li>
					<li><button onClick={(e) =>
						this.props.filterUpdate(e, 'Graphic')}>Graphic</button></li>
				</ul>
			</nav>
		);
	}
}

export default Filter;