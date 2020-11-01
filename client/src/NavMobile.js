import React from 'react';
import { Link } from 'react-router-dom';

class NavMobile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
			navSideRight: true,
			menu: props.menuItems,
			type: props.menuType
		}

		this.handleToggle = this.handleToggle.bind(this);
		this.switchSide = this.switchSide.bind(this);
	}

	handleToggle() {
		(this.state.toggle === true) ? 
		this.setState({toggle: false}) :
		this.setState({toggle: true});
	}

	switchSide() {
		(this.state.navSideRight === true) ?
		this.setState({navSideRight: false}) : 
		this.setState({navSideRight: true});
	}


	render() {

		let menuState = (this.state.toggle === false) ? 'closed' : 'open';
		let menuSide = (this.state.navSideRight === true) ? 'nav-on-right' : 'nav-on-left';

		let navAssembleMobile = this.state.menu.map(element => {
			return (
				<li key={element.order} onClick={this.handleToggle}>
					<Link to={element.url}>
						{element.label}
					</Link>
				</li>
			);
		});


		return (
			<div className={'mobile-nav-wrap ' + menuSide }>
				<button onClick={this.switchSide} className='toggle-nav-placement toggle-left'>Move menu here</button>
				<button onClick={this.handleToggle} className='mobile-nav-button'>Menu</button>
				<button onClick={this.switchSide} className='toggle-nav-placement toggle-right'>Move menu here</button>
				<ul className={this.state.type + '-nav mobile-nav ' + menuState }>
					
					{navAssembleMobile}
				</ul>
			</div>
		);
	}
}

export default NavMobile;