import React from 'react';
import { Layout } from 'antd';

// scss import
import styles from './styles/Sidebar.module.scss';

// components import
import Logo from '../atoms/Logo';
import MenuList from '../atoms/MenuList';

type SidebarProps = {
    collapsed: boolean;
    darkTheme: boolean;
    toggleTheme: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed, darkTheme }) => {
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
        </Layout.Sider>
    );
};

export default Sidebar;
