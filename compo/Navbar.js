import Link from 'flareact/link';
import Head from 'flareact/head';
// import { dgs } from '../helpers/dgs';

function Navbar({ dogs, title, keywords, description, children }) {
	const dogLinks = dogs.map((dog) => (
		<li className='nav-item' key={dog.name}>
			{/* <Link  href='/[slug]' as={`/${dog.name}`}>
				<a className='nav-link'>{dog.name}</a>
			</Link> */}
			<div>{dog.name}</div>
		</li>
	));
	// console.log('nav', dogs);
	return (
		<nav className='navbar navbar-expand-lg navbar-dark App-bg'>
			<Link href='/'>
				<a className='navbar-brand ms-3'>Dog App</a>
			</Link>

			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link href='/'>
							<a className='nav-link'>Home</a>
						</Link>
					</li>
					{dogLinks}
				</ul>
			</div>
		</nav>
	);

	Navbar.defaultProps = {
		title: 'Dogs shelter| Find the cutest and smart dog',
		description: 'Find the right dog for you',
		keywords: 'dogs, dogs shelter, smart dogs, cute dogs',
	};
}
export default Navbar;
