"use client"

import {useSectionSelector} from "@/pages/BookPages/BookPage/UI/SectionSelector/useSectionSelector";
import classes from "./sectionSelector.module.css"

const SectionSelector = () => {
    const {currentSection, changeToSection} = useSectionSelector()

    return (
        <div className={classes.block}>
            <div
                className={currentSection == "main" ? classes.active_selector : classes.selector}
                onClick={() => changeToSection("main")}
            >
                Описание
            </div>
            <div
                className={currentSection == "chapters" ? classes.active_selector : classes.selector}
                onClick={() => changeToSection("chapters")}
            >
                Главы
            </div>
        </div>
    );
};

export default SectionSelector;