import type { NextPage } from 'next';
import { useRef } from 'react';
import styles from './dropdown.module.css';

const Dropdown = () => {
  const dropdown = useRef(null);

  const rotateCaret = () => {
    if (dropdown.current.classList.contains(`${styles.down}`)) {
      dropdown.current.classList.add(`${styles.up}`);
      dropdown.current.classList.remove(`${styles.down}`);
    } else {
      dropdown.current.classList.add(`${styles.down}`);
      dropdown.current.classList.remove(`${styles.up}`);
    }
  };
  return (
    <div onClick={rotateCaret} className={styles.wrapper}>
      <p className={styles.title}>Dropdown</p>
      <div className={styles.flex}>
        <p className={styles.currentColumn}>Doing</p>
        <span ref={dropdown} className={`${styles.caret} ${styles.up}`} />
      </div>
    </div>
  );
};

export default Dropdown;
