import React from 'react';
import { Layout } from 'antd';

// components import
import Logo from '../atoms/Logo';
import styles from './styles/Sidebar.module.scss';
import MenuList from '../atoms/MenuList';
import ToggleThemeButton from '../atoms/ToggleTemeButton';

type SidebarProps = {
    collapsed: boolean;
    darkTheme: boolean;
    toggleTheme: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({
    collapsed,
    darkTheme,
    toggleTheme,
}) => {
    return (
        <Layout.Sider
            collapsed={collapsed}
            collapsible
            trigger={null}
            theme={darkTheme ? 'dark' : 'light'}
            className={styles.sidebar}
        >
            <Logo />
            <MenuList darkTeme={darkTheme} />
            {/* <ToggleThemeButton
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
            /> */}
        </Layout.Sider>
    );
};

export default Sidebar;
