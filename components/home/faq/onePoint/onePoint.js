// >> Imports
import styles from './onePoint.module.scss';
import { useState } from 'react';

// >> Images
import plus from '@/public/icons/plus.svg';
import minus from '@/public/icons/minus.svg';

// >> Components
import Image from 'next/image';
import { Typography } from '@/components/ui-kit/typography/typography';

export default function OnePoint(props) {
	const [active, setActive] = useState(false);
	const data = props.data;

	return (
		<div
			className={styles.onePoint}
			data-active={active}
			onClick={() => setActive(!active)}
		>
			<div className={styles.icon}>
				<Image
					src={active ? minus : plus}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>
			<div className={styles.texts}>
				<Typography className={styles.title}>{data.title}</Typography>
				<Typography className={styles.desc}>{data.desc}</Typography>
			</div>
		</div>
	);
}
