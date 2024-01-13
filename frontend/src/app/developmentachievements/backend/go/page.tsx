import React from 'react';

// scss import
import styles from './Go.module.scss';

// components import
import CommonLayout from '../../../../components/templates/CommonLayout';
import SectionTitle from '../../../../components/molecules/SectionTitle';

const Go = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='Go'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Go;
