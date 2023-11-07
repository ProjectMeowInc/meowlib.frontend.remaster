import React, { useState } from 'react';
import classes from './SwitchInput.module.css';

const SwitchInput = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.switchContainer}>
      <label className={classes.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={classes.slider} />
      </label>
    </div>
  );
};

export default SwitchInput;
