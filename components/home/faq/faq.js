// >> Imports
import styles from './faq.module.scss';

// >> Images
import plus from '@/public/icons/plus.svg';
import minus from '@/public/icons/minus.svg';
import bg_shadow from '@/public/images/bg_shadow.png';

// >> Components
import Image from 'next/image';
import OnePoint from './onePoint/onePoint';
import { Typography } from '@/components/ui-kit/typography/typography';

const list = [
	{
		title: 'What is Sora AI Companion Grok?',
		desc: 'It’s an AI-driven Telegram bot that helps you discover and trade emerging utility projects on the Solana blockchain with ease.',
	},
	{
		title: 'How does it identify new projects?',
		desc: 'The bot uses advanced AI algorithms to scan the Solana blockchain in real-time, detecting promising utility projects based on market trends and data.',
	},
	{
		title: 'Is my wallet secure with the bot?',
		desc: 'Yes, Sora AI Companion Grok includes robust security measures to protect your assets, with regular updates to enhance safety.',
	},
	{
		title: 'Can I control when the bot trades?',
		desc: 'Absolutely, you can start, stop, or adjust the bot’s trading activity anytime using simple Telegram commands.',
	},
	{
		title: 'Do I need technical knowledge to use it?',
		desc: 'No, the bot is designed to be user-friendly, requiring no advanced technical skills—just connect your wallet and start trading.',
	},
	{
		title: 'How do I get started with the bot?',
		desc: 'Join via Telegram, set up your Solana wallet, and launch the dApp to begin exploring and trading with Sora AI Companion Grok.',
	},
];

export default function Faq(props) {
	return (
		<div className={styles.section} id="faq">
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
				<div className={styles.top}>
					<div className={styles.sectionName} data-aos="fade-up">
						<Typography>Our FAQ</Typography>
					</div>
					<Typography
						type={'h2'}
						className={styles.title}
						aos="fade-up"
					>
						Frequently Asked Questions
					</Typography>
				</div>
				<div className={styles.points} data-aos="fade-up">
					{list.map((element, index) => {
						return <OnePoint data={element} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}

