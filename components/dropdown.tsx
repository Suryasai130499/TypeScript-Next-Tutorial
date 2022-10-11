import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import styles from './componentCSS/dropdown.module.css';
import { DropdownInterface } from './interfaces';
import useDropdownStore from '../zustand/dropdown';

const Dropdown: NextPage<DropdownInterface> = ({
  listItems = ['Done', 'Doing', 'ToDo'],
}) => {
  const dropdown = useRef<HTMLSpanElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const listOfStatuses = useDropdownStore((state) => state.listofStatuses);
  const setListofStatuses = useDropdownStore(
    (state) => state.setListofStatuses
  );
  const currentStatus = useDropdownStore((state) => state.currentStatus);
  const setCurrentStatus = useDropdownStore((state) => state.setCurrentStatus);

  useEffect(() => {
    setListofStatuses(listItems);
  }, []);

  useEffect(() => {
    setCurrentStatus(listOfStatuses[0]);
    console.log(currentStatus);
  }, [listOfStatuses]);

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

  const selectItem = (item: string) => {
    setCurrentStatus(item);
    list.current?.classList.remove(`${styles.show}`);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Dropdown</p>
        <div onClick={rotateCaret} className={styles.flex}>
          <p className={styles.currentColumn}>{currentStatus}</p>
          <span ref={dropdown} className={`${styles.caret} ${styles.down}`} />
        </div>
      </div>
      <ul ref={list} className={styles.dropdownList}>
        {listOfStatuses.map((listItem: string, index: number) => (
          <li
            onClick={() => selectItem(listItem)}
            className={styles.dropdownItem}
            key={index}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
