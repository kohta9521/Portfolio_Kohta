'use client';
import React, { useState } from 'react';

import { theme } from 'antd';

// scss import
import styles from './styles/CommonLayout.module.scss';
import { Header } from 'antd/es/layout/layout';
import Sidebar from '../organisms/Sidebar';

// props type
export type CommonLayoutProps = {
    id: number;
    children: React.ReactNode;
};

const CommonLayout = ({ id, children }: CommonLayoutProps) => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className={styles.commonLayout} key={id}>
            <Header />
            <Sidebar
                collapsed={collapsed}
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
            />
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default CommonLayout;
