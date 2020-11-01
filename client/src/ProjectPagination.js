import React from 'react';
import { Link } from 'react-router-dom';


function ProjectPagination(props) {

	let index = Number(props.index);
	let array = props.array;
	let location = props.loc;
	const prevIndex = index - 1;
	const nextIndex = index + 1;

	let prev = index === 0 ? null : <Link to={array[prevIndex].id} id='prev'><button className='pagination-button'>&#8249; Prev</button></Link>;
	let next = index === (array.length - 1) ? null : <Link to={array[nextIndex].id} id='next'><button className='pagination-button'>Next &#8250;</button></Link>;

	let centerFix = !prev ? 'start-fix'
					: !next ? 'end-fix'
					: 'no-probs';


	return (
		<nav className='pagination' id={location}>
			<div className='pagination-wrap'>
				{prev}
				<Link to='/' id={`close-btn ${centerFix}`}>
					<button className='close'>Close X</button>
				</Link>
				{next}
			</div>
		</nav>
	);

}

export default ProjectPagination;