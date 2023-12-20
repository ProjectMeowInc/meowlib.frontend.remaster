import React, {useState} from 'react';
import classes from './MenuBurger.module.css'
import Menu from "@/pages/MainPage/UI/Menu/Menu";

const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <img src={'/img/view-list.png'} onClick={handleClick}/>
            {isOpen && (
                <div className={classes.menu}>
                  <Menu/>
                </div>
            )}
        </div>
    );
};

export default MenuBurger;