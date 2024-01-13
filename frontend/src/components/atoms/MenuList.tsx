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
                <Link href={'/technologyused'}>使用技術</Link>
            </Menu.Item>
            {/* submenu */}
            <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='開発実績'>
                <Menu.SubMenu key='subtasks' title='Frontend'>
                    <Menu.Item key='subtask-1'>HTML/CSS</Menu.Item>
                    <Menu.Item key='subtask-1'>React/Next.js</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key='task-1'>Backend</Menu.Item>
                <Menu.Item key='task-1'>その他</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='progress' icon={<AreaChartOutlined />}>
                ブログ
            </Menu.Item>
            <Menu.Item key='payment' icon={<PayCircleOutlined />}>
                私について
            </Menu.Item>
            <Menu.Item key='setting' icon={<SettingOutlined />}>
                <Link href={'/contact'}>ご連絡</Link>
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
