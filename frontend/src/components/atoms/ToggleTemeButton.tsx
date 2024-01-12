import React from 'react';

// scss import
import styles from './styles/ToggleThemeButton.module.scss';

// react icons
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

// antd import
import { Button } from 'antd';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
    return (
        <div className={styles.toggle_theme_button}>
            <Button onClick={toggleTheme}>
                {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
            </Button>
        </div>
    );
};

export default ToggleThemeButton;
