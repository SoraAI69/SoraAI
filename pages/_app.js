// >> Imports
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext(null);

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/globals.scss';

// >> Fonts
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
	// >> Main context
	const [popup, setPopup] = useState('');

	useEffect(() => {
		Aos.init({ duration: 1200, once: true });
	}, []);

	return (
		<StyledEngineProvider>
			<CssBaseline />
			<div className={`${spaceGrotesk.className}`}>
				<MainContext.Provider
					value={{
						popup,
						setPopup,
					}}
				>
					<Component {...pageProps} />
				</MainContext.Provider>
			</div>
		</StyledEngineProvider>
	);
}

export default MyApp;
