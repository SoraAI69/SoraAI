// >> Imports
import styles from './popup.module.scss';
import { PopupClickCheck } from '@/hooks/outsideClickCheck';
import { useContext, useRef } from 'react';
import { MainContext } from '@/pages/_app';

// >> DESIGN
export default function Popup({
	popupName,
	PopupComponent = {},
	children,
	permanent = false,
}) {
	// Variables
	const { popup, setPopup } = useContext(MainContext);

	// Outside click
	const popupRef = useRef(null);

	if (permanent === false) {
		PopupClickCheck(popupRef, popup, setPopup, popupName);
	}

	return (
		<div
			className={styles.bg}
			data-visible={popup === popupName ? true : false}
			data-popupname={popupName}
		>
			<div ref={popupRef}>{children ? children : PopupComponent}</div>
		</div>
	);
}
