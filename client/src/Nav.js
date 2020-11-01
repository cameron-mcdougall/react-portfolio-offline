import React from 'react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';


function Nav(props) {

	const content = props.list;
	const type = props.type;

	let navAssemble = content.map(element => {
		return (
			<li key={element.order}>
				{(type === 'footer') ?
				<a href={element.url}>
					{element.label}
				</a> :
				<Link to={element.url}>
					{element.label}
				</Link>
				}
			</li>
		);
	});

	return (
		<nav>
			<div className='nav-wrap'>
				<ul className={type + '-nav'}>
					{navAssemble}
				</ul>
			</div>
			{(type === 'header') ?
				<NavMobile menuItems={props.list} menuType={props.type} /> :
				null}
		</nav>
	);

}

export default Nav;