'use client';
import React, { useState } from 'react';

import { theme } from 'antd';

// scss import
import styles from './styles/CommonLayout.module.scss';
import Sidebar from '../organisms/Sidebar';
import Header from '../organisms/Header';

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

    const marginLeft = collapsed ? '-120px' : '0px';
    return (
        <div className={styles.commonLayout} key={id}>
            <Header
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                background={colorBgContainer}
            />
            <Sidebar
                collapsed={collapsed}
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
            />
            <div className={styles.container} style={{ marginLeft }}>
                {children}
            </div>
        </div>
    );
};

export default CommonLayout;
