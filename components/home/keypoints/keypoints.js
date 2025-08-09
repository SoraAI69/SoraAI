// >> Imports
import styles from './keypoints.module.scss';

// >> Images
import signal from '@/public/icons/signal.svg';
import bg_shadow from '@/public/images/bg_shadow.png';

import point1bg from '@/public/images/keypoints/point1.png';
import point2bg from '@/public/images/keypoints/point2.png';
import point3bg from '@/public/images/keypoints/point3.png';
import point4bg from '@/public/images/keypoints/point4.png';
import point5bg from '@/public/images/keypoints/point5.png';
import point6bg from '@/public/images/keypoints/point6.png';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';

const list = [
	{
		bg: point1bg,
		title: 'Project Discovery:',
		desc: 'Real-time scanning of Solana for emerging opportunities.',
	},
	{
		bg: point2bg,
		title: 'AI-Powered Trading:',
		desc: 'Automated buys/sells based on AI-optimized market insights.',
	},
	{
		bg: point3bg,
		title: 'Trade History:',
		desc: 'Detailed transaction logs with profit/loss summaries.',
	},
	{
		bg: point4bg,
		title: 'Wallet Management:',
		desc: 'Secure and efficient control over your crypto assets.',
	},
	{
		bg: point5bg,
		title: 'Bot Control:',
		desc: 'Intuitive start/stop options for customizable operation.',
	},
	{
		bg: point6bg,
		title: 'Growth Rankings:',
		desc: 'Real-time dashboard tracking 1000+ Solana projects',
	},
];

export default function Keypoints(props) {
	return (
		<div className={styles.section} id="keypoints">
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
				<div className={styles.top}>
					<div className={styles.left}>
						<div
							className={styles.sectionName}
							data-aos="fade-right"
						>
							<Typography>Our Keypoints</Typography>
						</div>
						<Typography
							type={'h2'}
							className={styles.title}
							aos="fade-right"
						>
							Key Features of Sora AI Companion Grok
						</Typography>
					</div>
					<div className={styles.right}>
						<Typography
							type={'p2'}
							className={styles.desc}
							aos="fade-left"
						>
							Sora AI Companion Grok is an AI-powered Telegram bot
							for Solana, delivering project discovery, automated
							trading, wallet management, and real-time rankings
							in a secure, decentralized framework.
						</Typography>
						<div
							className={styles.sectionNames}
							data-aos="fade-left"
						>
							<div className={styles.sectionName}>
								<Image
									src={signal}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
								<Typography>No-Code Development</Typography>
							</div>
							<div className={styles.sectionName}>
								<Image
									src={signal}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
								<Typography>Blockchain Integration</Typography>
							</div>
							<div className={styles.sectionName}>
								<Image
									src={signal}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
								<Typography>Profit</Typography>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					{list.map((element, index) => {
						return (
							<div
								className={styles.onePoint}
								key={index}
								data-aos="fade-up"
							>
								<div className={styles.pointBg}>
									<Image
										src={element.bg}
										alt=""
										quality={99}
										priority={true}
										className="image"
									/>
								</div>
								<div className={styles.texts}>
									<div className={styles.topTexts}>
										<Typography
											type={'h3'}
											className={styles.pointTitle}
										>
											{element.title}
										</Typography>
										<Typography
											type={'b2'}
											className={styles.pointNumber}
										>
											{index + 1}/{list.length}
										</Typography>
									</div>
									<Typography
										type={'p2'}
										className={styles.pointDesc}
									>
										{element.desc}
									</Typography>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
