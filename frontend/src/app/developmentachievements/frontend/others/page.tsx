import React from 'react';

// scss import
import styles from './Others.module.scss';

// components import
import CommonLayout from '../../../../components/templates/CommonLayout';
import SectionTitle from '../../../../components/molecules/SectionTitle';

// components import

const Others = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='Others/Frontend'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Others;
