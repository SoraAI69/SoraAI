// >> Imports
import styles from './about.module.scss';

// >> Images
import arrow_short_right from '@/public/icons/arrow_short_right.svg';
import success from '@/public/icons/success.svg';
import sectionImg from '@/public/images/about/sectionImg.png';
import bg_shadow from '@/public/images/bg_shadow.png';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';
import { Button } from '@/components/ui-kit/button/button';

const list = [
	{
		title: 'Project Discovery:',
		desc: 'Actively scans Solana for new investment opportunities, providing quick access to emerging projects.',
	},
	{
		title: 'Automated Trading:',
		desc: 'Uses AI to identify optimal trades, executing buys/sells automatically with easy start/stop controls.',
	},
	{
		title: 'Trade History & Analytics:',
		desc: 'Offers detailed transaction logs, profit/loss summaries, and web-based growth rankings, plus wallet management for full control.',
	},
];

export default function About(props) {
	return (
		<div className={styles.section} id="about">
			<div className={styles.inside}>
				<div className={styles.bg_shadow1}>
					<Image
						src={bg_shadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.bg_shadow2}>
					<Image
						src={bg_shadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.left}>
					<div className={styles.sectionName} data-aos="fade-right">
						<Typography>About Us</Typography>
					</div>
					<Typography
						type={'h2'}
						className={styles.title}
						aos="fade-right"
					>
						About Sora AI Companion Grok
					</Typography>
					<Typography
						type={'p2'}
						className={styles.desc}
						aos="fade-right"
					>
						Sora AI Companion Grok is an advanced AI bot for Solana
						trading, offering seamless project detection, automated
						transactions, and insightful analytics in a
						decentralized environment.
					</Typography>
					<div className={styles.list}>
						{list.map((element, index) => {
							return (
								<div
									className={styles.onePoint}
									key={index}
									data-aos="fade-right"
								>
									<div className={styles.pointTop}>
										<Image
											src={success}
											alt=""
											quality={99}
											priority={true}
											className="image"
										/>
										<Typography
											type={'b1'}
											className={styles.pointTitle}
										>
											{element.title}
										</Typography>
									</div>
									<Typography
										type={'p2'}
										className={styles.pointDesc}
									>
										{element.desc}
									</Typography>
								</div>
							);
						})}
						<div data-aos="fade-right">
							<Button
								type={'primary'}
								size={'l'}
								text={'Launch App'}
								rightIcon={arrow_short_right}
								href="https://t.me/soraaiapp_bot"
								fullWidth
							/>
						</div>
					</div>
				</div>
				<div className={styles.right} data-aos="fade-left">
					<Image
						src={sectionImg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
		</div>
	);
}


