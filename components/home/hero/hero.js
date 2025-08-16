// >> Imports
import styles from './hero.module.scss';

// >> Images
import arrow_short_right from '@/public/icons/arrow_short_right.svg';
import telegram from '@/public/icons/telegram.svg';
import twitter from '@/public/icons/twitter.svg';
import mouse from '@/public/icons/mouse.svg';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';
import { Button } from '@/components/ui-kit/button/button';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero(props) {
	return (
		<div className={styles.section} id="hero">
			<div className={styles.inside}>
				<Typography
					type={'h1'}
					className={styles.title}
					aos="fade-right"
					aosDelay={400}
				>
					Sora AI Companion Grok: Your AI-powered Solana Trading Ally
				</Typography>
				<Typography
					type={'p1'}
					className={styles.desc}
					aos="fade-right"
					aosDelay={500}
				>
					Sora AI Companion Grok is an AI-powered Telegram bot built
					for the Solana ecosystem. It detects emerging projects,
					automates trades, manages wallets, tracks history, and
					provides real-time growth rankings for smarter trading
					decisions. Join the future of trading today.
				</Typography>
				<div
					className={styles.buttons}
					data-aos-delay={600}
					data-aos="fade-right"
				>
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
						href="https://t.me/soraaiapp_bot"
						target="_blank"
					/>
					<Button
						type={'icon'}
						size={'m'}
						leftIcon={twitter}
						href="https://x.com/SoraAI_app"
						target="_blank"
					/>
					<ScrollLink
						className={styles.scrollForMore}
						to={'partners'}
						data-aos-delay={700}
						data-aos="fade-right"
					>
						<Image
							src={mouse}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<Typography>Scroll for more</Typography>
					</ScrollLink>
				</div>
			</div>
		</div>
	);
}


