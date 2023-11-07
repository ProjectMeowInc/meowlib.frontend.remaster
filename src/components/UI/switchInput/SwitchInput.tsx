import React, { useState } from 'react';
import styles from './SwitchInput.module.css';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={styles.slider} />
      </label>
    </div>
  );
};

export default Switch;
