// >> Imports
import styles from './tokenomics.module.scss';
import { useState } from 'react';

// >> Images
import arrow_short_right from '@/public/icons/arrow_short_right.svg';
import bg_shadow from '@/public/images/bg_shadow.png';
import symbol from '@/public/symbol.svg';

import green from '@/public/images/tokenomics/green.png';
import blue from '@/public/images/tokenomics/blue.png';
import pink from '@/public/images/tokenomics/pink.png';
import orange from '@/public/images/tokenomics/orange.png';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';
import { Button } from '@/components/ui-kit/button/button';

const list = [
	{
		bg: green,
		title: 'Presale',
		percentage: 23,
		hex: '#BEFF79',
		desc: 'Space is a new Layer 1 blockchain created to discover innovative tech solutions and bring decentralization',
	},
	{
		bg: blue,
		title: 'Presale',
		percentage: 23,
		hex: '#7FA2F4',
		desc: 'Space is a new Layer 1 blockchain created to discover innovative tech solutions and bring decentralization',
	},
	{
		bg: pink,
		title: 'Presale',
		percentage: 23,
		hex: '#FF6EFA',
		desc: 'Space is a new Layer 1 blockchain created to discover innovative tech solutions and bring decentralization',
	},
	{
		bg: orange,
		title: 'Presale',
		percentage: 23,
		hex: '#FFAF6E',
		desc: 'Space is a new Layer 1 blockchain created to discover innovative tech solutions and bring decentralization',
	},
];

export default function Tokenomics(props) {
	const [hovered, setHovered] = useState(null);

	return (
		<div className={styles.section} id="tokenomics">
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
							<Typography>Our Tokenomics</Typography>
						</div>
						<Typography
							type={'h2'}
							className={styles.title}
							aos="fade-right"
						>
							Tokenomics
						</Typography>
						<Typography
							type={'p2'}
							className={styles.desc}
							aos="fade-right"
						>
							Space is a new Layer 1 blockchain created to
							discover innovative tech solutions and bring
							decentralization to the masses. Fast, composable,
							ecological, and friction-free, with an own ecosystem
							combining multichain bridge, DEX and more.
						</Typography>
						<div className={styles.buttons} data-aos="fade-right">
							<Button
								type={'primary'}
								size={'m'}
								text={'Buy Tokens Here'}
								rightIcon={arrow_short_right}
								href="https://google.com"
								target="_blank"
							/>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.rightTop}>
							<Typography
								type={'h2'}
								className={styles.supplyTitle}
								aos="fade-left"
							>
								Total Supply
							</Typography>
							<div
								className={styles.coloredBox}
								data-color="green"
								data-aos="fade-left"
							>
								<div className={styles.dot}></div>
								<Typography>Presale is LIVE!</Typography>
							</div>
						</div>
						<Typography
							type={'h2'}
							className={styles.supplyAmount}
							aos="fade-left"
						>
							100.000.000 <span>Tokens</span>
						</Typography>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.amounts}>
						{list.map((element, index) => {
							return (
								<div
									className={styles.oneAmount}
									key={index}
									onMouseEnter={() => setHovered(element.hex)}
									onMouseLeave={() => setHovered(null)}
									data-aos="fade-up"
								>
									<div className={styles.top}>
										<div
											className={styles.line}
											style={{ background: element.hex }}
										></div>

										<Typography
											className={styles.amountTitle}
										>
											{element.title}{' '}
											<span
												style={{ color: element.hex }}
											>
												[{element.percentage}%]
											</span>
										</Typography>
									</div>

									<Typography
										type={'p2'}
										className={styles.amountDesc}
									>
										{element.desc}
									</Typography>
								</div>
							);
						})}
					</div>
					<div className={styles.circles} data-aos="zoom-in">
						{list.map((element, index) => {
							return (
								<div
									className={styles.oneCircle}
									key={index}
									data-hovered={hovered === element.hex}
								>
									<Image
										src={element.bg}
										alt=""
										quality={99}
										priority={true}
										className="image"
									/>
								</div>
							);
						})}

						<div className={styles.symbol}>
							<Image
								src={symbol}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
