import React from 'react';
import Link from 'next/link';

// scss import
import styles from './styles/MenuList.module.scss';

// antd import
import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    CodeOutlined,
    FileTextOutlined,
    UserOutlined,
    SendOutlined,
} from '@ant-design/icons';

const MenuList = ({ darkTeme }: any) => {
    return (
        <Menu
            theme={darkTeme ? 'dark' : 'light'}
            mode='inline'
            className={styles.menu_bar}
        >
            <Menu.Item key='home' icon={<HomeOutlined />}>
                <Link href={'/'}>ホーム</Link>
            </Menu.Item>
            <Menu.Item key='about' icon={<UserOutlined />}>
                <Link href={'/about'}>私について</Link>
            </Menu.Item>
            <Menu.Item key='techonology' icon={<AppstoreOutlined />}>
                <Link href={'/technologyused'}>使用技術</Link>
            </Menu.Item>
            <Menu.SubMenu
                key='achievement'
                icon={<CodeOutlined />}
                title='開発実績'
            >
                <Menu.SubMenu key='frontend' title='Frontend'>
                    <Menu.Item key='frontend-1'>HTML/CSS</Menu.Item>
                    <Menu.Item key='frontend-2'>React/Next.js</Menu.Item>
                    <Menu.Item key='frontend-3'>その他</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key='backend' title='Backend'>
                    <Menu.Item key='backend-1'>Rust</Menu.Item>
                    <Menu.Item key='backend-2'>Go</Menu.Item>
                    <Menu.Item key='backend-3'>その他</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key='others' title='その他'>
                    <Menu.Item key='others-1'>自動化</Menu.Item>
                    <Menu.Item key='others-2'>その他</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key='blog' icon={<FileTextOutlined />}>
                <Link href={'/blog'}>ブログ</Link>
            </Menu.Item>
            <Menu.Item key='contact' icon={<SendOutlined />}>
                <Link href={'/contact'}>ご連絡</Link>
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
