import React from 'react';
import './Header.css';
import Nav from './Nav';
import ThemeSwitch from './ThemeSwitch';
import { mainNavElements } from './Content';

const menuType = 'header';

function Header() {
	return(
		<header>
			<h1>Cameron McDougall</h1>
			<Nav list={mainNavElements} type={menuType} />
			<ThemeSwitch />
		</header>
	);
}

export default Header;