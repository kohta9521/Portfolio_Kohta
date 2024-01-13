import React from 'react';

// scss import
import styles from './styles/MenuList.module.scss';

// antd import
import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

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
            <Menu.Item key='activity' icon={<AppstoreOutlined />}>
                <Link href={'/about'}>使用技術</Link>
            </Menu.Item>
            {/* submenu */}
            <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='開発実績'>
                <Menu.Item key='task-1'>バックエンド</Menu.Item>
                <Menu.Item key='task-2'>フロントエンド</Menu.Item>
                <Menu.SubMenu key='subtasks' title='Subtasks'>
                    <Menu.Item key='subtask-1'>HTML/CSS</Menu.Item>
                    <Menu.Item key='subtask-1'>React/Next.js</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key='progress' icon={<AreaChartOutlined />}>
                Progress
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined />}>
                Payment
            </Menu.Item>
            <Menu.Item key='setting' icon={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
