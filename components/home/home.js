// >> Imports
import styles from './home.module.scss';

// >> Components
import Nav from './nav/nav';
import Hero from './hero/hero';
import Partners from './partners/partners';
import About from './about/about';
import Keypoints from './keypoints/keypoints';
import Tokenomics from './tokenomics/tokenomics';
import Roadmap from './roadmap/roadmap';
import Join from './join/join';
import Faq from './faq/faq';
import Footer from './footer/footer';

export default function Home() {
	return (
		<div className={styles.page}>
			<video
				src="./images/heroBg.mp4"
				autoPlay
				loop
				muted
				playsInline
				className={styles.videoDiv}
			></video>
			<div className={styles.bg}></div>
			<Nav />
			<Hero />
			<Partners />
			<About />
			<Keypoints />
			<Tokenomics />
			<Roadmap />
			<Join />
			<Faq />
			<Footer />
		</div>
	);
}
