import React from 'react';
import './ThemeSwitch.css';

class ThemeSwitch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			darkMode: false
		}

		this.switchTheme = this.switchTheme.bind(this);
	}
	
	switchTheme(event) {

		let toggleState = () => {
    		(this.state.darkMode === false) ? 
    		this.setState({darkMode: true}) :
    		this.setState({darkMode: false})
    	}

    	let toggleClass = () => {
    		if (this.state.darkMode === false) {
				if (document.body.classList.contains('lightmode')) {
    				document.body.classList.remove('lightmode')
    				document.body.classList.add('darkmode')
    			} else {
    				document.body.classList.add('darkmode')
    			}
    		} else {
    			if (this.state.darkMode === true) {
    				if (document.body.classList.contains('darkmode')) {
    					document.body.classList.remove('darkmode')
    					document.body.classList.add('lightmode')
    				} else {
    					document.body.classList.add('lightmode')
    				}
    			}
    		}
    	}

    	toggleState();
		toggleClass();

  	}

	render() {
		return (
			<>
				<label className='theme-switch'>
            		<input onClick={this.switchTheme} type='checkbox'></input>
            		<span className='slider round'>
            			<span>{'\u263E'}</span>
            			<span>{'\u263C'}</span>
            		</span>
          		</label>
          	</>
		);
	}  	
}

export default ThemeSwitch;