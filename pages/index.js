// >> Imports
import Head from 'next/head';

// >> Components
import Home from '@/components/home/home';

// >> Variables
const name = 'Sora.AI';

export default function Page(props) {
	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>

			<div className="base">
				<Home />
			</div>
		</>
	);
}
