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

const MenuList = ({ darkTeme }: any) => {
    return (
        <Menu
            theme={darkTeme ? 'dark' : 'light'}
            mode='inline'
            className={styles.menu_bar}
        >
            <Menu.Item key='home' icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key='activity' icon={<AppstoreOutlined />}>
                Activity
            </Menu.Item>
            {/* submenu */}
            <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='tasks'>
                <Menu.Item key='task-1'>Task 1</Menu.Item>
                <Menu.Item key='task-2'>Task 2</Menu.Item>
                <Menu.SubMenu key='subtasks' title='Subtasks'>
                    <Menu.Item key='subtask-1'>Subtask 1</Menu.Item>
                    <Menu.Item key='subtask-1'>Subtask 2</Menu.Item>
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
