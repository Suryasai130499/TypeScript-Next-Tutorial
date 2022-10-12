import type { NextPage } from 'next';

import styles from './componentCSS/NewColumnModel.module.css';
import TextField from './textField';
import Button from './button';

const NewColumnModel: NextPage = () => {
  return (
    <div className={styles.shadow}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Add New Column</h2>
        <div className={styles.textField}>
          <TextField name="column" placeholder="Enter the column name" />
          <img src="/cross.svg" alt="" className={styles.cross} />
        </div>
        <Button type="secondary">+Add New Column</Button>
        <Button type="primary">Add Columns to Board</Button>
      </div>
    </div>
  );
};

export default NewColumnModel;
