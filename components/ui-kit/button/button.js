// >> Imports
import styles from './button.module.scss';

// >> Components
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Button as CustomButton, Typography } from '@mui/material';

/*
 <Button
	type={'primary'}
	size={'s'}
	text={'text'}
	leftIcon={null}
	rightIcon={null}
	fullWidth={false}
	onClick={null}
	href={null}
	to={null}
	toOffset={null}
	target={null}
	disabled={false}
	active={false}
/> 
*/

export const Button = ({
	type, // primary, secondary, tertiary, border, problem, text, icon
	size, // l, m, s,
	text,
	leftIcon,
	rightIcon,
	fullWidth,
	onClick,
	href,
	to,
	toOffset,
	target,
	disabled,
	active,
}) => {
	const buttonContent = (
		<>
			{leftIcon ? (
				<span className={styles.leftIcon}>
					<Image
						src={leftIcon}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</span>
			) : null}
			{text ? (
				<Typography className={styles.centerText}>{text}</Typography>
			) : null}
			{rightIcon ? (
				<span className={styles.rightIcon}>
					<Image
						src={rightIcon}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</span>
			) : null}
		</>
	);

	if (href && !disabled) {
		return (
			<Link href={href} target={target || null} passHref>
				<CustomButton
					data-type={type || 'primary'}
					data-size={size || 'm'}
					data-fullwidth={fullWidth || false}
					data-active={active || false}
					className={styles.button}
					disableRipple={type === 'text'}
				>
					{buttonContent}
				</CustomButton>
			</Link>
		);
	}

	if (to && !disabled) {
		return (
			<ScrollLink to={to} offset={toOffset || 0}>
				<CustomButton
					onClick={disabled ? null : onClick}
					data-type={type || 'primary'}
					data-size={size || 'm'}
					data-fullwidth={fullWidth || false}
					data-active={active || false}
					className={styles.button}
					disableRipple={type === 'text'}
				>
					{buttonContent}
				</CustomButton>
			</ScrollLink>
		);
	}

	return (
		<CustomButton
			href={href || null}
			target={target || null}
			onClick={disabled ? null : onClick}
			data-type={type || 'primary'}
			data-size={size || 'm'}
			data-fullwidth={fullWidth || false}
			data-active={active || false}
			className={styles.button}
			data-disabled={disabled || false}
			disableRipple={type === 'text'}
		>
			{buttonContent}
		</CustomButton>
	);
};
