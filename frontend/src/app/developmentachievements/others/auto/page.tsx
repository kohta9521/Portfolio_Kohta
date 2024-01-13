import React from 'react';

// scss import
import styles from './Auto.module.scss';

// components import
import CommonLayout from '../../../../components/templates/CommonLayout';
import SectionTitle from '../../../../components/molecules/SectionTitle';

// components import

const Auto = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='Auto'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Auto;
