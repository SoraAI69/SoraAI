// >> Imports
import styles from './partners.module.scss';

// >> Images
import dextools from '@/public/images/partners/dextools.svg';
import dexscreener from '@/public/images/partners/dexscreener.svg';
import solana from '@/public/images/partners/solana.svg';
import raydium from '@/public/images/partners/raydium.svg';
import moontok from '@/public/images/partners/moontok.svg';
import cntoken from '@/public/images/partners/cntoken.svg';
import aveai from '@/public/images/partners/aveai.svg';
import coinmarketcap from '@/public/images/partners/coinmarketcap.svg';
import coingecko from '@/public/images/partners/coingecko.svg';

// >> Components
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';
import { Button } from '@/components/ui-kit/button/button';
import { Link as ScrollLink } from 'react-scroll';

export default function Partners(props) {
	return (
		<div className={styles.section} id="partners" data-aos="fade-up">
			<Marquee className={styles.inside} play autoFill>
				<Image src={dextools} alt="Dextools" />
				<div className={styles.line}></div>
				<Image src={dexscreener} alt="Dexscreener" />
				<div className={styles.line}></div>
				<Image src={solana} alt="Solana" />
				<div className={styles.line}></div>
				<Image src={raydium} alt="Raydium" />
				<div className={styles.line}></div>
				<Image src={moontok} alt="Moontok" />
				<div className={styles.line}></div>
				<Image src={cntoken} alt="CNTOKEN" />
				<div className={styles.line}></div>
				<Image src={aveai} alt="AveAI" />
				<div className={styles.line}></div>
				<Image src={coinmarketcap} alt="CoinMarketCap" />
				<div className={styles.line}></div>
				<Image src={coingecko} alt="CoinGecko" />
				<div className={styles.line}></div>
			</Marquee>
		</div>
	);
}
