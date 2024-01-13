import React from 'react';
import { Button, Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    GithubOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';

// scss import
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
            <div className={styles.flex}>
                <Button
                    shape='circle'
                    className={styles.sns_icons}
                    icon={<GithubOutlined />}
                />
                <Button
                    shape='circle'
                    className={styles.sns_icons}
                    icon={<TwitterOutlined />}
                />
                <Button
                    shape='circle'
                    className={styles.sns_icons}
                    icon={<YoutubeOutlined />}
                />
                <Button
                    shape='circle'
                    className={styles.sns_icons}
                    icon={<LinkedinOutlined />}
                />
                <Button type='primary' className={styles.contact_button}>
                    CONTACT
                </Button>
            </div>
        </Layout.Header>
    );
};

export default Header;
