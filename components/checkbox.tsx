import type { NextPage } from 'next';
import { MouseEventHandler, useRef, useState } from 'react';
import styles from './componentCSS/checkbox.module.css';
import * as interfaces from './interfaces';

const Checkbox: NextPage<interfaces.CheckboxInterface> = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const Input = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        <p className={`${checked ? styles.content : ''}`}>{item}</p>
        <input
          onChange={() => setChecked(!checked)}
          ref={Input}
          type="checkbox"
          checked={checked}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default Checkbox;

// onClick = { toggleCheck };
