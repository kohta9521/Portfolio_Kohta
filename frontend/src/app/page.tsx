import React from 'react';

// scss import
import styles from '../styles/Page.module.scss';

// components import
import CommonLayout from '../components/templates/CommonLayout';
import SectionTitle from '../components/molecules/SectionTitle';

export default function Home() {
    return (
        <CommonLayout id={1}>
            <SectionTitle
                id={1}
                title='Welcome to my Portfolio Site!!'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
}
