import Link from 'flareact/link';
// import Image from 'next/image';
// import Navbar from '../compo/Navbar';
import Head from 'flareact/head';
import { useState } from 'react';
import Navbar from '../../compo/Navbar';
// import hazel from '../public/hazel.jpg';
// import tubby from '../public/tubby.jpg';
// import whiskey from '../public/whiskey.jpg';
const data = [
	{
		name: 'Whiskey',
		age: 5,
		src: '/dw.jpg',
		facts: [
			'Whiskey loves eating popcorn.',
			'Whiskey is a terrible guard dog.',
			'Whiskey wants to cuddle with you!',
		],
	},
	{
		name: 'Hazel',
		age: 3,
		src: '/dh.jpg',
		facts: [
			'Hazel has soooo much energy!',
			'Hazel is highly intelligent.',
			'Hazel loves people more than dogs.',
		],
	},
	{
		name: 'Tubby',
		age: 2,
		src: '/dt.jpg',
		facts: [
			'Tubby is not the brightest dog',
			'Tubby does not like walks or exercise.',
			'Tubby loves eating food.',
		],
	},
];

export async function getEdgeProps({ params }) {
	const dogs = data;
	const { slug } = params;
	// const name = slug;
	const dg = dogs.find((dog) => dog.name === slug);

	return {
		props: { dog: dg },
	};
}

export default function DogDetails({ dog }) {
	console.log('dog', dog.name);
	// const [dog, setDog] = useState(dg);
	// const { dog } = props;
	let dts = dog.facts;
	// console.log(dog);

	const details = dts.map((fact, i) => (
		<li className='list-group-item' key={i}>
			{fact}
		</li>
	));
	// console.log('lol', dog.src);

	// if (!dog) return '...loading';

	return (
		<>
			<Head>
				<title>{dog.name}</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='keywords' content={dog.name} />
				<meta name='description' content={dog.facts} />
			</Head>
			<Navbar dogs={data} />
			<div className='container'>
				<div className='DogDetails row justify-content-center mt-5'>
					<div className='col-11 col-lg-5'>
						<div className='DogDetails-card card'>
							<img className='image' alt={dog.name} src={dog.src} />
							<div className='card-body'>
								<h2 className='card-title'>{dog.name}</h2>
								<h4 className='card-subtitle text-muted'>
									{dog.age} years old
								</h4>
							</div>
							{details}
							<ul className='list-group list-group-flush'></ul>
							<div className='card-body'>
								<Link href='/'>
									<a className='btn btn-info'>Go Back</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
