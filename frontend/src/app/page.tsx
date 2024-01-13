import React from 'react';

// scss import
import styles from '../styles/Page.module.scss';

// components import
import CommonLayout from '../components/templates/CommonLayout';

export default function Home() {
    return (
        <CommonLayout id={1}>
            <h1>Top Page</h1>
        </CommonLayout>
    );
}
