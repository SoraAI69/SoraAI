// >> Imports
import styles from './typography.module.scss';

// >> Components
import { Typography as CustomTypography } from '@mui/material';

/*
 <Typography
	type={'h1'}
	className={styles.text}
	id="id"
	aos="fade-right"
	aosDelay={100}
/> 
*/

export const Typography = ({
	type, // h1, h2, h3, p1, p2, b1, b2
	className,
	id,
	aos,
	aosDelay,
	children,
}) => {
	return (
		<CustomTypography
			className={`${styles.typography} ${className}`}
			id={id || null}
			data-type={type}
			data-aos={aos || null}
			data-aos-delay={aosDelay || null}
			variant={type === 'h1' ? 'h1' : type === 'h2' ? 'h2' : 'body1'}
		>
			{children}
		</CustomTypography>
	);
};
