import React, {memo} from 'react';
import styles from './button.module.scss';
const Button = memo(({name, onClick}) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
));

export default Button;
