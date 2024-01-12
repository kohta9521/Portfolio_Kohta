'use client';
import React, { useState } from 'react';

// scss import
import styles from '../styles/Page.module.scss';

// ant design
import { Layout } from 'antd';

// components import
import TextDisplay from '@/components/atoms/TextDisplay';
import Logo from '@/components/atoms/Logo';
import MenuList from '@/components/atoms/MenuList';

const { Header, Sider } = Layout;

export default function Home() {
    return (
        <Layout>
            <Sider className={styles.sidebar}>
                <Logo />
                <MenuList />
            </Sider>
        </Layout>
    );
}
