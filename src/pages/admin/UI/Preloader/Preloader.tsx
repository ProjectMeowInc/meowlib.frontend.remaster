import React from 'react';
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.container}>
            <div className={classes.preloader}></div>
            <h2>Загрузка</h2>
          </div>
    );
};

export default Preloader;