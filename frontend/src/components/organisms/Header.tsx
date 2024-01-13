import React from 'react';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styles from './styles/Header.module.scss';

type HeaderProps = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    background: string;
};

const AppHeader: React.FC<HeaderProps> = ({
    collapsed,
    setCollapsed,
    background,
}) => {
    return (
        <Layout.Header className={styles.header}>
            {/* <Button
                type='text'
                className={styles.toggle}
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <Button type='primary'>Primary Button</Button> */}
            {/* その他のヘッダー要素 */}
        </Layout.Header>
    );
};

export default AppHeader;
