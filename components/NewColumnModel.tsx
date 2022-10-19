import type { NextPage } from 'next';
import { useRef, useState } from 'react';

import styles from './componentCSS/NewColumnModel.module.css';
import TextField from './textField';
import NoTextField from './noTitleField';
import Button from './button';

const NewColumnModel: NextPage = () => {
  const removeItem = (e: any) => {
    console.log("I'm called");
    const target = e.target.parentNode;
    console.log(target);
    const index: number = Number.parseInt(target.dataset.index);
    setFields((prevFields) => [
      ...prevFields.slice(0, index),
      ...prevFields.slice(index + 1),
    ]);
  };

  const [fields, setFields] = useState([
    <div data-index={0} className={styles.textField}>
      <TextField name="column" placeholder="Enter the column name" />
      <img
        onClick={removeItem}
        src="/cross.svg"
        alt=""
        className={styles.cross}
      />
    </div>,
  ]);

  const addNewColumn = () => {
    if (fields.length > 0)
      setFields((prevFields) => {
        return [
          ...prevFields,
          <div data-index={prevFields.length} className={styles.textField}>
            <NoTextField name="column" placeholder="Enter the column name" />
            <img
              onClick={removeItem}
              src="/cross.svg"
              alt=""
              className={styles.cross}
            />
          </div>,
        ];
      });
    else {
      setFields([
        <div data-index={0} className={styles.textField}>
          <TextField name="column" placeholder="Enter the column name" />
          <img
            onClick={removeItem}
            src="/cross.svg"
            alt=""
            className={styles.cross}
          />
        </div>,
      ]);
    }
  };

  const addToBoard = () => {};

  return (
    <div className={styles.shadow}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Add New Column</h2>
        <div className={styles.fields}>{fields}</div>
        <Button onClick={addNewColumn} type="secondary">
          +Add New Column
        </Button>
        <Button onClick={addToBoard} type="primary">
          Add Columns to Board
        </Button>
      </div>
    </div>
  );
};

export default NewColumnModel;
