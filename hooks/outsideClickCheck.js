import { useEffect } from 'react';

export function OutsideClickCheck(ref, visible, changeVisible) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && visible === true) {
        changeVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, visible, changeVisible]);
}

export function PopupClickCheck(ref, popup, setPopup, popupName) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && popup === popupName) {
        setPopup('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, popup, setPopup, popupName]);
}
