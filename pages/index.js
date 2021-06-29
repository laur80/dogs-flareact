import { useRouter } from 'flareact/router';
import { useEffect } from 'react';

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		router.push('/public', '/public');
	}, []);

	return <h1>...loading</h1>;
}
