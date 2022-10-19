import type { NextPage } from 'next';
import * as interfaces from './interfaces';
import styles from './componentCSS/button.module.css';

const Button: NextPage<interfaces.ButtonInterface> = ({
  paddingBlock = '0.75rem',
  paddingInline = '1.5rem',
  fontSize = '0.8125rem',
  children,
  type,
  disabled = 'false',
  onClick,
}) => {
  return (
    <section
      className={styles.button}
      style={{
        paddingInline: paddingInline,
        paddingBlock: paddingBlock,
        fontSize: fontSize,
      }}
      data-type={type}
      data-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </section>
  );
};

export default Button;
