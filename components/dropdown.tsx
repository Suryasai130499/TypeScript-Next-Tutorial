import type { NextPage } from 'next';
import { useRef } from 'react';
import styles from './dropdown.module.css';
import { DropdownInterface } from './interfaces';

const Dropdown: NextPage<DropdownInterface> = ({
  listItems = ['Done', 'In-Progress', 'ToDo'],
}) => {
  const dropdown = useRef<HTMLSpanElement>(null);
  const list = useRef<HTMLUListElement>(null);

  const rotateCaret = () => {
    list.current?.classList.toggle(`${styles.show}`);
    if (dropdown.current?.classList.contains(`${styles.down}`)) {
      dropdown.current?.classList.add(`${styles.up}`);
      dropdown.current?.classList.remove(`${styles.down}`);
    } else {
      dropdown.current?.classList.add(`${styles.down}`);
      dropdown.current?.classList.remove(`${styles.up}`);
    }
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div onClick={rotateCaret} className={styles.wrapper}>
        <p className={styles.title}>Dropdown</p>
        <div className={styles.flex}>
          <p className={styles.currentColumn}>Doing</p>
          <span ref={dropdown} className={`${styles.caret} ${styles.down}`} />
        </div>
      </div>
      <ul ref={list} className={styles.dropdownList}>
        {listItems.map((listItem, index) => (
          <li className={styles.dropdownItem} key={index}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
