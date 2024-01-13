'use client';
import React, { useState } from 'react';

// scss import
import styles from '../styles/Page.module.scss';

// ant design
import { Button, Layout, theme } from 'antd';

// react icons
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

// components import
import Logo from '../components/atoms/Logo';
import MenuList from '../components/atoms/MenuList';
import ToggleThemeButton from '../components/atoms/ToggleTemeButton';

const { Header, Sider } = Layout;

export default function Home() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                collapsed={collapsed}
                collapsible
                trigger={null}
                theme={darkTheme ? 'dark' : 'light'}
                className={styles.sidebar}
            >
                <Logo />
                <MenuList darkTeme={darkTheme} />
                <ToggleThemeButton
                    darkTheme={darkTheme}
                    toggleTheme={toggleTheme}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type='text'
                        onClick={() => setCollapsed(!collapsed)}
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                    />
                </Header>
            </Layout>
        </Layout>
    );
}
