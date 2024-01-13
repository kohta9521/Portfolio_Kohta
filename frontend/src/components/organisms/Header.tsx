import React from 'react';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import styles from './styles/Header.module.scss';

type HeaderProps = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    background: string;
};

const Header: React.FC<HeaderProps> = ({
    collapsed,
    setCollapsed,
    background,
}) => {
    const marginLeft = collapsed ? '80px' : '200px';
    return (
        <Layout.Header className={styles.header}>
            <Button
                type='text'
                className={styles.toggle}
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                style={{ marginLeft }}
            />
            <Button type='primary' className={styles.contact_button}>
                CONTACT
            </Button>
        </Layout.Header>
    );
};

export default Header;
