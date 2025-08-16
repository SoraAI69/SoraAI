// >> Imports
import styles from './footer.module.scss';

// >> Images
import logo from '@/public/logo.svg';
import arrow_short_right from '@/public/icons/arrow_short_right.svg';
import twitter from '@/public/icons/twitter.svg';
import telegram from '@/public/icons/telegram.svg';

// >> Components
import Image from 'next/image';
import { Button } from '@/components/ui-kit/button/button';
import { Link } from 'react-scroll';
import { Typography } from '@/components/ui-kit/typography/typography';

export default function Footer(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside} data-aos="fade-up">
				<div className={styles.top}>
					<div className={styles.left}>
						<Link to="hero" className={styles.logo}>
							<Image
								src={logo}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Link>
						<Typography className={styles.leftDesc}>
							Sora AI Companion Grok: Your AI-Powered Solana
							Trading Ally. Detect projects, automate trades, and
							maximize profits with real-time insights.
						</Typography>
						<div className={styles.socials}>
							<Button
								type={'primary'}
								size={'m'}
								text={'Start Trading'}
								rightIcon={arrow_short_right}
								href="https://t.me/soraaiapp_bot"
								target="_blank"
							/>
							<Button
								type={'icon'}
								size={'m'}
								leftIcon={telegram}
								href="https://t.me/+iAFCus_AC4o5YmY1"
								target="_blank"
							/>
							<Button
								type={'icon'}
								size={'m'}
								leftIcon={twitter}
								href="https://x.com/SoraAI_app"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.right}>
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
				<div className={styles.line}></div>
				<div className={styles.bottom}>
					<Typography className={styles.bottomDesc}>
						Copyright SnipeAI. All Rights Reserved. Powered By
						Web3Software.
					</Typography>
					<div className={styles.buttons}>
						<Button
							type={'text'}
							size={'m'}
							text={'Privacy Policy'}
							href="https://google.com"
							target="_blank"
						/>
						<Button
							type={'text'}
							size={'m'}
							text={'Terms of Condition'}
							href="https://google.com"
							target="_blank"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}


