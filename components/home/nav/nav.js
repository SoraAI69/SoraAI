// >> Imports
import styles from './nav.module.scss';

// >> Images
import logo from '@/public/logo.svg';
import arrow_short_right from '@/public/icons/arrow_short_right.svg';

// >> Components
import Image from 'next/image';
import { Button } from '@/components/ui-kit/button/button';
import { Link } from 'react-scroll';

export default function Nav(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside} data-aos="fade-down">
				<div className={styles.left} data-aos="fade-right">
					<Link to="hero" className={styles.logo}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</Link>
					<div className={styles.links}>
						<Button
							type={'text'}
							size={'m'}
							text={'About'}
							to={'about'}
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'Keypoints'}
							to={'keypoints'}
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'Tokenomics'}
							to={'tokenomics'}
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'Roadmap'}
							to={'roadmap'}
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'Join Us'}
							to={'join'}
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'FAQ'}
							to={'faq'}
						/>
					</div>
				</div>
				<div className={styles.btn} data-aos="fade-left">
					<Button
						type={'primary'}
						size={'m'}
						text={'Connect Wallet'}
						rightIcon={arrow_short_right}
						onClick={() => {
							// connect wallet
						}}
					/>
				</div>
			</div>
		</div>
	);
}
