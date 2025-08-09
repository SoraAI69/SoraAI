// >> Imports
import styles from './roadmap.module.scss';

// >> Images
import success from '@/public/icons/success.svg';
import clock from '@/public/icons/clock.svg';
import bg_shadow from '@/public/images/bg_shadow.png';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';

const list = [
	{
		name: 'Phase 1',
		status: 'Done',
		points: [
			{
				title: 'Concept and Solana analysis.',
				status: 'Done',
			},
			{
				title: 'AI for project discovery (real-time scanning of emerging opportunities).',
				status: 'Done',
			},
			{
				title: 'Telegram interface with wallet management (secure connection, balance tracking).',
				status: 'Done',
			},
			{
				title: 'Start/stop bot controls for full oversight.',
				status: 'Done',
			},
			{
				title: 'Trade history with detailed logs (buy/sell, profit/loss summaries).',
				status: 'Done',
			},
			{
				title: 'Simple profiles (profit/loss overview, web dashboard with growth rankings of top projects).',
				status: 'Done',
			},
			{
				title: 'Simple profiles (profit/loss overview, web dashboard with growth rankings of top projects).',
				status: 'Done',
			},
		],
	},
	{
		name: 'Phase 2',
		status: 'In Progress',
		points: [
			{
				title: 'Beta release with basic security (wallet encryption).',
				status: 'Done',
			},
			{
				title: 'Automated trades (buy/sell based on AI-optimized insights, with laddered take profits). (Completed)',
				status: 'Done',
			},
			{
				title: 'Trade tracking with advanced profit profiles (real-time PNL, auto-rebalance). (Completed)',
				status: 'Done',
			},
			{
				title: 'Strategy selection (low/medium/high risk, custom setups like arbitrage or momentum trading). (Planned)',
				status: 'In Progress',
			},
			{
				title: 'Integration with exchanges (Raydium, Orca – DEX selection for better fills). (Planned)',
				status: 'In Progress',
			},
			{
				title: 'Web rankings expansion (dashboard with AI predictions for top growth). (Planned)',
				status: 'In Progress',
			},
		],
	},
	{
		name: 'Phase 3',
		status: 'In Progress',
		points: [
			{
				title: 'AI upgrades with machine learning (adaptive algorithms predicting market shifts).',
				status: 'In Progress',
			},
			{
				title: 'Custom controls with advanced strategies (yield optimization, dynamic risk management).',
				status: 'In Progress',
			},
			{
				title: 'Multi-chain support (Ethereum, Binance Smart Chain – seamless cross-chain trading).',
				status: 'In Progress',
			},
			{
				title: 'Voice interface (real-time bot control via voice commands).',
				status: 'In Progress',
			},
			{
				title: 'Predictive analytics dashboard (trend forecasts with 90% accuracy via ML).',
				status: 'In Progress',
			},
			{
				title: 'DAO governance (users vote on new features, share profits via governance tokens).',
				status: 'In Progress',
			},
		],
	},
];

export default function Roadmap(props) {
	return (
		<div className={styles.section} id="roadmap">
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
						<Typography>Our Roadmap</Typography>
					</div>
					<Typography
						type={'h2'}
						className={styles.title}
						aos="fade-up"
					>
						Roadmap
					</Typography>
					<Typography
						type={'p2'}
						className={styles.desc}
						aos="fade-up"
					>
						Sora AI Companion Grok is an AI-powered Telegram bot for
						Solana, focused on project detection, automated trading,
						and real-time analytics to enable decentralized trading.
					</Typography>
				</div>
				<div className={styles.bottom}>
					{list.map((element, index) => {
						return (
							<div
								className={styles.onePoint}
								data-status={element.status}
								key={index}
								data-aos="fade-up"
							>
								<div className={styles.pointTop}>
									<Typography
										type="h3"
										className={styles.pointTitle}
									>
										{element.name}
									</Typography>
									<div
										className={styles.coloredBox}
										data-color={
											element.status === 'Done'
												? 'green'
												: 'orange'
										}
									>
										<div className={styles.dot}></div>
										<Typography>
											{element.status}
										</Typography>
									</div>
								</div>
								<div className={styles.line}></div>
								<div className={styles.phasePoints}>
									{element.points.map((point, pointIndex) => {
										return (
											<div
												className={styles.phasePoint}
												data-status={point.status}
												key={pointIndex}
											>
												<div
													className={
														styles.phasePointImg
													}
												>
													<Image
														src={
															point.status ===
															'Done'
																? success
																: clock
														}
														alt=""
														quality={99}
														priority={true}
														className="image"
													/>
												</div>
												<Typography
													type="p2"
													className={
														styles.phasePointTitle
													}
												>
													{point.title}
												</Typography>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
