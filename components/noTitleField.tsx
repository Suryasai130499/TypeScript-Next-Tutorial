import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './componentCSS/textField.module.css';
import { TextFieldInterface } from './interfaces';

const TextField: NextPage<TextFieldInterface> = ({ name, placeholder }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Can't be empty");

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        name={name}
        placeholder={placeholder}
        data-error={error}
      />
      {error ? (
        <span className={styles.errorMessage}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default TextField;
