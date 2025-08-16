// >> Imports
import styles from './join.module.scss';

// >> Images
import arrow_short_right from '@/public/icons/arrow_short_right.svg';
import telegram from '@/public/icons/telegram.svg';
import twitter from '@/public/icons/twitter.svg';
import sectionBg from '@/public/images/join/sectionBg.png';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';
import { Button } from '@/components/ui-kit/button/button';

export default function Join(props) {
	return (
		<div className={styles.section} id="join">
			<div className={styles.inside}>
				<div className={styles.sectionBg}>
					<Image
						src={sectionBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>

				<div className={styles.sectionName} data-aos="fade-up">
					<Typography>Social Media</Typography>
				</div>
				<Typography type={'h2'} className={styles.title} aos="fade-up">
					Join Our Community
				</Typography>
				<Typography type={'p2'} className={styles.desc} aos="fade-up">
					Connect with Sora AI Companion Grok&apos;s community to stay
					updated on Solana trading innovations, share insights, and
					collaborate on decentralized strategies.
				</Typography>
				<div className={styles.buttons} data-aos="fade-up">
					<Button
						type={'primary'}
						size={'m'}
						text={'Telegram'}
						leftIcon={telegram}
						rightIcon={arrow_short_right}
						href="https://t.me/+iAFCus_AC4o5YmY1"
						target="_blank"
					/>
					<Button
						type={'secondary'}
						size={'m'}
						text={'Twitter [X]'}
						leftIcon={twitter}
						rightIcon={arrow_short_right}
						href="https://x.com/SoraAI_app"
						target="_blank"
					/>
				</div>
			</div>
		</div>
	);
}


