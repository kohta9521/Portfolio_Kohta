import React from 'react';

// scss import
import styles from './About.module.scss';

// components import
import CommonLayout from '../../components/templates/CommonLayout';
import SectionTitle from '../../components/molecules/SectionTitle';

const Technologyused = () => {
    return (
        <CommonLayout id={1}>
            <SectionTitle
                id={1}
                title='使用技術'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Technologyused;
